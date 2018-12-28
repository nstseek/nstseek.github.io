#!/bin/bash

echo "Shell script - define user configs"
echo "Written by NSTSeek"
echo " "
echo "Creating directories..."
mkdir ~/.atom
mkdir ~/Software
mkdir ~/Desktop
echo "Done"
echo " "
echo "Copying .bashrc file"
cp ~/DriveH/autoscript/bashrc.txt ~/.bashrc
echo "Done"
echo " "
echo "Uncompressing atom editor..."
tar -xvf ~/DriveH/autoscript/atom-amd64.tar.gz -C ~/Software
echo "Done"
echo " "
echo "Copying atom plugins"
cp -r ~/DriveH/autoscript/atomplug.atom/* ~/.atom
echo "Done"
echo " "
echo "Uncompressing Swift compiler..."
tar -xvf ~/DriveH/autoscript/swift-4.1.3-RELEASE-ubuntu16.10.tar.gz -C ~/Software
echo "Done"
echo " "
echo "Creating shortcuts..."
cp ~/DriveH/autoscript/atom.desktop ~/Desktop/atom.desktop
cp ~/DriveH/autoscript/.atom.png ~/Desktop/.atom.png
echo "Done"
echo " "
echo "Settings applied - configuration finished"
