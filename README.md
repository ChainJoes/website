***The test environment used python3.10***

1. Setup app
```
cd /var/www
git clone git@github.com:ChainJoe-s/website.git -b api/mail sendgrid_api

cd sendgrid_api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
2. Making service
```
cp mail_api.service /etc/systemd/system
systemctl start mail_api
```
3. Check status
```
systemctl status mail_api
```
If everything works, the service is running on port 8044

###  Example  of  nginx  conf  to  proxy  local  port  8044  for  a  domain.
```
server {
    listen 80;
    server_name mail.example.com;

    location / {
        proxy_pass http://localhost:8044;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```