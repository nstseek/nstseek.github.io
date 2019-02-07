const fs = require('fs');
const child_process = require('child_process');

if(process.argv.length > 2){
    console.log(`Script called with ${process.argv[2]} argument`);
    if(process.argv[2] === '--help') {
        console.log(`Call this script with --usekey to use a existent key in ./android/app/ or --uselocalkey to use a hidden key in ${process.env.HOME}/\nOr run this script without arguments to create a key on the run.\n.keystore file must have 123456 as all passwords requested on the creation process\nKey alias must be 'keyalias' and key filename must be 'key.keystore'`);
        process.exit(0);
    }
    else if (process.argv[2] === '--usekey'){
        if(fs.existsSync("./android/app/key.keystore") === false) {
            console.log("FATAL ERROR: ./android/app/key.keystore does not exist!\nPlace a key.keystore in ./android/app/ or run this script without --usekey");
            process.exit(1);
        }
        console.log("Using existent key...");
    }
    else if (process.argv[2] === '--uselocalkey'){
        if(fs.existsSync(`${process.env.HOME}/.key.keystore`) === false) {
            console.log(`FATAL ERROR: ${process.env.HOME}/.key.keystore does not exist!\nPlace a key.keystore in ./android/app/ or run this script without --usekey`);
            process.exit(1);
        }
        console.log('Using existent local key...');
        console.log("Copying local key...");
        child_process.execSync(`cp ${process.env.HOME}/.key.keystore ./android/app/key.keystore`, { stdio: 'inherit' });
        console.log("Done");
    }
    else {
        console.log("Argument not recognized!");
        process.exit(1);
    }
}
else {
    console.log('Process called without arguments...\nPlease create a key:');
    if(fs.existsSync("./android/app/key.keystore") === true) {
        child_process.execSync('rm ./android/app/key.keystore');
    }    
    child_process.execSync('keytool -genkey -v -keystore key.keystore -alias keyalias -keyalg RSA -keysize 2048 -validity 10000', { stdio: [ process.stdin, process.stdout, process.stderr ], cwd: './android/app/' });
    if(fs.existsSync("./android/app/key.keystore") === false) {
        console.log("FATAL ERROR: ./android/app/key.keystore does not exist!\nPlace a key.keystore in ./android/app/ or run this script without --usekey");
        process.exit(1);
    }
}

console.time("runtime");

console.log("\nBacking up build.gradle...");
child_process.execSync('cp ./android/app/build.gradle ./build-original.gradle', { stdio: 'inherit' });
console.log('Done\n');

//EDIT GRADLE.PROPERTIES
console.log("Appending gradle.properties...");
fs.appendFileSync("./android/gradle.properties", `MYAPP_RELEASE_STORE_FILE=key.keystore
MYAPP_RELEASE_KEY_ALIAS=keyalias
MYAPP_RELEASE_STORE_PASSWORD=123456
MYAPP_RELEASE_KEY_PASSWORD=123456`);
console.log('Done\n');

// EDIT BUILD.GRADLE
console.log('Editing build.gradle...')
let file = fs.readFileSync('./android/app/build.gradle');
file = file.toString();

const fileSlice1 = file.slice(0, file.search(`android {`)+9);
const fileSlice2 = file.slice(file.search(`android {`)+9);
const insert = `
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }`;

const finalFile = fileSlice1 + insert + fileSlice2;

child_process.execSync('rm ./android/app/build.gradle', { stdio: 'inherit' });

fs.writeFileSync("./android/app/build.gradle", finalFile);
console.log('Done\n');

console.log('Building .apk...');
child_process.execSync('./gradlew assembleRelease', { stdio: 'inherit', cwd: './android/' });
console.log('Done\n');

console.log('Finished.');
console.log('Your apk should be in ./android/app/build/outputs/releases/apk-release.apk.\n');

console.timeEnd("runtime");