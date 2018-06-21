import requests

url = "http://127.0.0.1:8888/v1/chain/get_block"

payload = "block_num_or_id=1&json=true"
headers = {
    'Content-Type': "application/x-www-form-urlencoded",
    'Cache-Control': "no-cache",
    'Postman-Token': "8d9ed539-da2f-2344-2d68-d14c2baaafff"
    }
response = requests.request("POST", url, data=payload,headers=headers)

print(response.text)
