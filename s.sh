sleep 5 

wget -q https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -O /ngrok-stable-linux-amd64.zip\
    && cd /root/kode && unzip ngrok-stable-linux-amd64.zip \
    && chmod +x ngrok

/ngrok tcp --authtoken 2M27dRwze2Ne9C3JBrCF9v0tZz9_3uyj5aXQt5CjKW6t5LGov --region ap 22 &
sleep 5
curl -s http://localhost:4040/api/tunnels | python3 -c "import sys, json; print(\"ssh info:\n\",\"ssh\",\"root@\"+json.load(sys.stdin)['tunnels'][0]['public_url'][6:].replace(':', ' -p '),\"\nROOT Password:deka99\")" || echo "
Error：NGROK_TOKEN，Ngrok Token                            "
/usr/sbin/sshd -D