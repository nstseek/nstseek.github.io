#!/bin/bash/
set -x

cp -rf sources.list /etc/apt/sources.list
cp -rf .bashrc /home/nstseek/
aptitude -y update
apt install curl wget apt-transport-https dirmngr
curl -o key.pub https://dl-ssl.google.com/linux/linux_signing_key.pub
curl -sL http://nsolid-deb.nodesource.com/nsolid_setup_3.x | sudo bash -
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
apt-key adv --keyserver ha.pool.sks-keyservers.net --recv-keys 1F3045A5DF7587C3
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | apt-key add -
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
apt-key add key.pub
apt-get -y install nsolid-dubnium nsolid-console
aptitude -y install visual-studio-code
aptitude -y install sublime-text
aptitude -y install hwinfo
aptitude -y install libicu60
aptitude -y install libicu-dev
aptitude -y install net-tools
aptitude -y install openssh-server
aptitude -y install vsftpd
aptitude -y install nvidia-detect
aptitude -y install google-chrome-stable
aptitude -y install ftp
aptitude -y install rsync
aptitude -y install git
aptitude -y install maxima
aptitude -y install vim
aptitude -y install nvidia-driver
aptitude -y update
aptitude -y full-upgrade
echo "Finished."
shutdown 60
