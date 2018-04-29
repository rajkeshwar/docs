#Converting PPK to PEM using putty-tools
$ sudo apt-get install putty-tools

$ puttygen server1.ppk -O private-openssh -o server1.pem

$ chmod 400 server1.pem
```
$ ssh -i server1.pem ubuntu@11.22.33.44
```


puttygen server1.ppk -O private-openssh -o server1.pem


# Login AWS 
`ssh -i ~/RAJ_WORKS/CM_Key.pem ec2-user@54.87.135.14`

# SSH to AWS 
`scp -pr -i ~/RAJ_WORKS/CM_Key.pem ./dist ec2-user@54.87.135.14:~/import-mappings/`
