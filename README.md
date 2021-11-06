```
-----Install nvm------

curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh -o install_nvm.sh
bash install_nvm.sh
source ~/.profile
nvm install 13
nvm use 13

-----Spawn error fixer-----

sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab

--------Edit mx watchers-------------

sudo vi /etc/sysctl.conf
--->add this 
fs.inotify.max_user_watches=524288

sudo sysctl -p

------Instal npm dependencies-----

npm install
npm install gatsby-plugin-manifest@2.4.37 gatsby-remark-images@3.3.40

-----Run developer-----

npm run start

-----------------------
```

