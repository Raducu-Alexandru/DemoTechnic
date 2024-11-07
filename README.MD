# Demo technic prezentare Redis

## Setup inițial:

Creearea container docker cu Redis:

```bash
docker pull redis
docker run -d --name redis-server -p 6379:6379 redis
```

Creearea mediul de executare Python3:

```bash
python3 -m venv ./env
source ./env/bin/activate
pip3 install redis
```

## Demo-uri

1. Demo Structuri de date

2. Demo Stocare obiect complex
