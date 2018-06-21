var request = require("request");

//todo ------------------------------------------------------------------------get_block
var options = {
    method: 'POST',
    url: 'http://mainnet.eoscanada.com/v1/chain/get_block',
    headers:
        {
            'Postman-Token': '52454baa-eae0-84ef-8b06-b0fc04bbcd31',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        },
    body: {block_num_or_id: '1'},
    json: true
};
/*
* { timestamp: '2018-06-01T12:00:00.000',
  producer: '',
  confirmed: 1,
  previous: '0000000000000000000000000000000000000000000000000000000000000000',
  transaction_mroot: '0000000000000000000000000000000000000000000000000000000000000000',
  action_mroot: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  schedule_version: 0,
  new_producers: null,
  header_extensions: [],
  producer_signature: 'SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne',
  transactions: [],
  block_extensions: [],
  id: '00000001bcf2f448225d099685f14da76803028926af04d2607eafcf609c265c',
  block_num: 1,
  ref_block_prefix: 2517196066 }
* **/
//todo ------------------------------------------------------------------------get_account
options = {
    method: 'POST',
    url: 'http://mainnet.eoscanada.com/v1/chain/get_account',
    headers:
        {
            'Postman-Token': '48f603ed-3529-f42e-5d9b-14ef80d8ffed',
            'Cache-Control': 'no-cache',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        },
    body: {account_name: 'eosio'},
    json: true
};
/*
* { account_name: 'eosio',
  head_block_num: 10050,
  head_block_time: '2018-06-15T08:07:47.500',
  privileged: true,
  last_code_update: '1970-01-01T00:00:00.000',
  created: '2018-06-01T12:00:00.000',
  ram_quota: -1,
  net_weight: -1,
  cpu_weight: -1,
  net_limit: { used: -1, available: -1, max: -1 },
  cpu_limit: { used: -1, available: -1, max: -1 },
  ram_usage: 2724,
  permissions:
   [ { perm_name: 'active', parent: 'owner', required_auth: [Object] },
     { perm_name: 'owner', parent: '', required_auth: [Object] } ],
  total_resources: null,
  self_delegated_bandwidth: null,
  refund_request: null,
  voter_info: null }
* **/


//todo ------------------------------------------------------------------------get_block
var options = {
    method: 'POST',
    url: 'http://mainnet.eoscanada.com/v1/chain/get_block',
    body: {block_num_or_id: '1'},
    json: true
};
/*
*
* { timestamp: '2018-06-01T12:00:00.000',
  producer: '',
  confirmed: 1,
  previous: '0000000000000000000000000000000000000000000000000000000000000000',
  transaction_mroot: '0000000000000000000000000000000000000000000000000000000000000000',
  action_mroot: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  schedule_version: 0,
  new_producers: null,
  header_extensions: [],
  producer_signature: 'SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne',
  transactions: [],
  block_extensions: [],
  id: '00000001bcf2f448225d099685f14da76803028926af04d2607eafcf609c265c',
  block_num: 1,
  ref_block_prefix: 2517196066 }

// * */
//todo ------------------------------------------------------------------------get_block_header_state---------------------code: 3100002, name: 'unknown_block_exception',
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/chain/get_block_header_state',
//     body:
//         {block_num_or_id: '00000001bcf2f448225d099685f14da76803028926af04d2607eafcf609c265c'},
//     json: true
// };

//todo ------------------------------------------------------------------------get_abi

options = {
    method: 'POST',
    url: 'http://mainnet.eoscanada.com/v1/chain/get_abi',
    body: {account_name: 'eosio.token'},
    json: true
};
/*
* {
  "account_name": "hello.code",
  "abi": {
    "version": "eosio::abi/1.0",
    "types": [],
    "structs": [
      {
        "name": "hi",
        "base": "",
        "fields": [
          {
            "name": "user",
            "type": "name"
          }
        ]
      }
    ],
    "actions": [
      {
        "name": "hi",
        "type": "hi",
        "ricardian_contract": ""
      }
    ],
    "tables": [],
    "ricardian_clauses": [],
    "error_messages": [],
    "abi_extensions": []
  }
}
* **/
//todo ------------------------------------------------------------------------get_code
options = {
    method: 'POST',
    url: 'http://mainnet.eoscanada.com/v1/chain/get_code',
    body: {account_name: 'eosio.token'},
    json: true
};
/*
* { account_name: 'hello.code',
  code_hash: '1d0070ffc528f1268ad1f6c5ba998245811318bdcfd8827432d56e24c69a476c',
  wast: '(module\n  (type $0 (func (param i32 i64)))\n  (type $1 (func  (result i64)))\n  (type $2 (func (param i64 i64)))\n  (type $3 (func (param i32 i32)))\n  (type $4 (func  (result i32)))\n  (type $5 (func (param i32 i32) (result i32)))\n  (type $6 (func (param i32 i32 i32) (result i32)))\n  (type $7 (func (param i32)))\n  (type $8 (func (param i64)))\n  (type $9 (func ))\n  (type $10 (func (param i64 i64 i64)))\n  (type $11 (func (param i32) (result i32)))\n  (import "env" "action_data_size" (func $14  (result i32)))\n  (import "env" "current_time" (func $15  (result i64)))\n  (import "env" "eosio_assert" (func $16 (param i32 i32)))\n  (import "env" "memcpy" (func $17 (param i32 i32 i32) (result i32)))\n  (import "env" "printn" (func $18 (param i64)))\n  (import "env" "prints" (func $19 (param i32)))\n  (import "env" "read_action_data" (func $20 (param i32 i32) (result i32)))\n  (import "env" "require_auth2" (func $21 (param i64 i64)))\n  (export "memory" (memory $13))\n  (export "_ZeqRK11checksum256S1_" (func $22))\n  (export "_ZeqRK11checksum160S1_" (func $23))\n  (export "_ZneRK11checksum160S1_" (func $24))\n  (export "now" (func $25))\n  (export "_ZN5eosio12require_authERKNS_16permission_levelE" (func $26))\n  (export "apply" (func $27))\n  (export "malloc" (func $30))\n  (export "free" (func $33))\n  (export "memcmp" (func $34))\n  (memory $13 1)\n  (table $12 2 2 anyfunc)\n  (elem $12 (i32.const 0)\n    $35 $28)\n  (data $13 (i32.const 4)\n    "\\c0a\\00\\00")\n  (data $13 (i32.const 16)\n    "onerror\\00")\n  (data $13 (i32.const 32)\n    "eosio\\00")\n  (data $13 (i32.const 48)\n    "onerror action\'s are only valid from the \\"eosio\\" system account\\00")\n  (data $13 (i32.const 112)\n    "read\\00")\n  (data $13 (i32.const 128)\n    "Hello, \\00")\n  (data $13 (i32.const 8544)\n    "malloc_from_freed was designed to only be called after _heap was"\n    " completely allocated\\00")\n  \n  (func $22\n    (param $0 i32)\n    (param $1 i32)\n    (result i32)\n    get_local $0\n    get_local $1\n    i32.const 32\n    call $34\n    i32.eqz\n    )\n  \n  (func $23\n    (param $0 i32)\n    (param $1 i32)\n    (result i32)\n    get_local $0\n    get_local $1\n    i32.const 32\n    call $34\n    i32.eqz\n    )\n  \n  (func $24\n    (param $0 i32)\n    (param $1 i32)\n    (result i32)\n    get_local $0\n    get_local $1\n    i32.const 32\n    call $34\n    i32.const 0\n    i32.ne\n    )\n  \n  (func $25\n    (result i32)\n    call $15\n    i64.const 1000000\n    i64.div_u\n    i32.wrap/i64\n    )\n  \n  (func $26\n    (param $0 i32)\n    get_local $0\n    i64.load\n    get_local $0\n    i64.load offset=8\n    call $21\n    )\n  \n  (func $27\n    (param $0 i64)\n    (param $1 i64)\n    (param $2 i64)\n    (local $3 i32)\n    (local $4 i32)\n    (local $5 i64)\n    (local $6 i64)\n    (local $7 i64)\n    (local $8 i64)\n    (local $9 i32)\n    i32.const 0\n    i32.const 0\n    i32.load offset=4\n    i32.const 32\n    i32.sub\n    tee_local $9\n    i32.store offset=4\n    i64.const 0\n    set_local $6\n    i64.const 59\n    set_local $5\n    i32.const 16\n    set_local $4\n    i64.const 0\n    set_local $7\n    loop $loop\n      block $block\n        block $block1\n          block $block2\n            block $block3\n              block $block4\n                get_local $6\n                i64.const 6\n                i64.gt_u\n                br_if $block4\n                get_local $4\n                i32.load8_s\n                tee_local $3\n                i32.const -97\n                i32.add\n                i32.const 255\n                i32.and\n                i32.const 25\n                i32.gt_u\n                br_if $block3\n                get_local $3\n                i32.const 165\n                i32.add\n                set_local $3\n                br $block2\n              end ;; $block4\n              i64.const 0\n              set_local $8\n              get_local $6\n              i64.const 11\n              i64.le_u\n              br_if $block1\n              br $block\n            end ;; $block3\n            get_local $3\n            i32.const 208\n            i32.add\n            i32.const 0\n            get_local $3\n            i32.const -49\n            i32.add\n            i32.const 255\n            i32.and\n            i32.const 5\n            i32.lt_u\n            select\n            set_local $3\n          end ;; $block2\n          get_local $3\n          i64.extend_u/i32\n          i64.const 56\n          i64.shl\n          i64.const 56\n          i64.shr_s\n          set_local $8\n        end ;; $block1\n        get_local $8\n        i64.const 31\n        i64.and\n        get_local $5\n        i64.const 4294967295\n        i64.and\n        i64.shl\n        set_local $8\n      end ;; $block\n      get_local $4\n      i32.const 1\n      i32.add\n      set_local $4\n      get_local $6\n      i64.const 1\n      i64.add\n      set_local $6\n      get_local $8\n      get_local $7\n      i64.or\n      set_local $7\n      get_local $5\n      i64.const -5\n      i64.add\n      tee_local $5\n      i64.const -6\n      i64.ne\n      br_if $loop\n    end ;; $loop\n    block $block5\n      get_local $7\n      get_local $2\n      i64.ne\n      br_if $block5\n      i64.const 0\n      set_local $6\n      i64.const 59\n      set_local $5\n      i32.const 32\n      set_local $4\n      i64.const 0\n      set_local $7\n      loop $loop1\n        block $block6\n          block $block7\n            block $block8\n              block $block9\n                block $block10\n                  get_local $6\n                  i64.const 4\n                  i64.gt_u\n                  br_if $block10\n                  get_local $4\n                  i32.load8_s\n                  tee_local $3\n                  i32.const -97\n                  i32.add\n                  i32.const 255\n                  i32.and\n                  i32.const 25\n                  i32.gt_u\n                  br_if $block9\n                  get_local $3\n                  i32.const 165\n                  i32.add\n                  set_local $3\n                  br $block8\n                end ;; $block10\n                i64.const 0\n                set_local $8\n                get_local $6\n                i64.const 11\n                i64.le_u\n                br_if $block7\n                br $block6\n              end ;; $block9\n              get_local $3\n              i32.const 208\n              i32.add\n              i32.const 0\n              get_local $3\n              i32.const -49\n              i32.add\n              i32.const 255\n              i32.and\n              i32.const 5\n              i32.lt_u\n              select\n              set_local $3\n            end ;; $block8\n            get_local $3\n            i64.extend_u/i32\n            i64.const 56\n            i64.shl\n            i64.const 56\n            i64.shr_s\n            set_local $8\n          end ;; $block7\n          get_local $8\n          i64.const 31\n          i64.and\n          get_local $5\n          i64.const 4294967295\n          i64.and\n          i64.shl\n          set_local $8\n        end ;; $block6\n        get_local $4\n        i32.const 1\n        i32.add\n        set_local $4\n        get_local $6\n        i64.const 1\n        i64.add\n        set_local $6\n        get_local $8\n        get_local $7\n        i64.or\n        set_local $7\n        get_local $5\n        i64.const -5\n        i64.add\n        tee_local $5\n        i64.const -6\n        i64.ne\n        br_if $loop1\n      end ;; $loop1\n      get_local $7\n      get_local $1\n      i64.eq\n      i32.const 48\n      call $16\n    end ;; $block5\n    block $block11\n      block $block12\n        get_local $1\n        get_local $0\n        i64.eq\n        br_if $block12\n        i64.const 0\n        set_local $6\n        i64.const 59\n        set_local $5\n        i32.const 16\n        set_local $4\n        i64.const 0\n        set_local $7\n        loop $loop2\n          block $block13\n            block $block14\n              block $block15\n                block $block16\n                  block $block17\n                    get_local $6\n                    i64.const 6\n                    i64.gt_u\n                    br_if $block17\n                    get_local $4\n                    i32.load8_s\n                    tee_local $3\n                    i32.const -97\n                    i32.add\n                    i32.const 255\n                    i32.and\n                    i32.const 25\n                    i32.gt_u\n                    br_if $block16\n                    get_local $3\n                    i32.const 165\n                    i32.add\n                    set_local $3\n                    br $block15\n                  end ;; $block17\n                  i64.const 0\n                  set_local $8\n                  get_local $6\n                  i64.const 11\n                  i64.le_u\n                  br_if $block14\n                  br $block13\n                end ;; $block16\n                get_local $3\n                i32.const 208\n                i32.add\n                i32.const 0\n                get_local $3\n                i32.const -49\n                i32.add\n                i32.const 255\n                i32.and\n                i32.const 5\n                i32.lt_u\n                select\n                set_local $3\n              end ;; $block15\n              get_local $3\n              i64.extend_u/i32\n              i64.const 56\n              i64.shl\n              i64.const 56\n              i64.shr_s\n              set_local $8\n            end ;; $block14\n            get_local $8\n            i64.const 31\n            i64.and\n            get_local $5\n            i64.const 4294967295\n            i64.and\n            i64.shl\n            set_local $8\n          end ;; $block13\n          get_local $4\n          i32.const 1\n          i32.add\n          set_local $4\n          get_local $6\n          i64.const 1\n          i64.add\n          set_local $6\n          get_local $8\n          get_local $7\n          i64.or\n          set_local $7\n          get_local $5\n          i64.const -5\n          i64.add\n          tee_local $5\n          i64.const -6\n          i64.ne\n          br_if $loop2\n        end ;; $loop2\n        get_local $7\n        get_local $2\n        i64.ne\n        br_if $block11\n      end ;; $block12\n      get_local $9\n      get_local $0\n      i64.store offset=24\n      get_local $2\n      i64.const 7746191359077253120\n      i64.ne\n      br_if $block11\n      get_local $9\n      i32.const 0\n      i32.store offset=20\n      get_local $9\n      i32.const 1\n      i32.store offset=16\n      get_local $9\n      get_local $9\n      i64.load offset=16\n      i64.store offset=8 align=4\n      get_local $9\n      i32.const 24\n      i32.add\n      get_local $9\n      i32.const 8\n      i32.add\n      call $29\n      drop\n    end ;; $block11\n    i32.const 0\n    get_local $9\n    i32.const 32\n    i32.add\n    i32.store offset=4\n    )\n  \n  (func $28\n    (param $0 i32)\n    (param $1 i64)\n    i32.const 128\n    call $19\n    get_local $1\n    call $18\n    )\n  \n  (func $29\n    (param $0 i32)\n    (param $1 i32)\n    (result i32)\n    (local $2 i32)\n    (local $3 i64)\n    (local $4 i32)\n    (local $5 i32)\n    (local $6 i32)\n    i32.const 0\n    i32.load offset=4\n    i32.const 16\n    i32.sub\n    tee_local $4\n    set_local $6\n    i32.const 0\n    get_local $4\n    i32.store offset=4\n    get_local $1\n    i32.load offset=4\n    set_local $2\n    get_local $1\n    i32.load\n    set_local $5\n    block $block\n      block $block1\n        block $block2\n          block $block3\n            call $14\n            tee_local $1\n            i32.eqz\n            br_if $block3\n            get_local $1\n            i32.const 513\n            i32.lt_u\n            br_if $block2\n            get_local $1\n            call $30\n            set_local $4\n            br $block1\n          end ;; $block3\n          i32.const 0\n          set_local $4\n          br $block\n        end ;; $block2\n        i32.const 0\n        get_local $4\n        get_local $1\n        i32.const 15\n        i32.add\n        i32.const -16\n        i32.and\n        i32.sub\n        tee_local $4\n        i32.store offset=4\n      end ;; $block1\n      get_local $4\n      get_local $1\n      call $20\n      drop\n    end ;; $block\n    get_local $6\n    i64.const 0\n    i64.store offset=8\n    get_local $1\n    i32.const 7\n    i32.gt_u\n    i32.const 112\n    call $16\n    get_local $6\n    i32.const 8\n    i32.add\n    get_local $4\n    i32.const 8\n    call $17\n    drop\n    get_local $6\n    i64.load offset=8\n    set_local $3\n    block $block4\n      get_local $1\n      i32.const 513\n      i32.lt_u\n      br_if $block4\n      get_local $4\n      call $33\n    end ;; $block4\n    get_local $0\n    get_local $2\n    i32.const 1\n    i32.shr_s\n    i32.add\n    set_local $1\n    block $block5\n      get_local $2\n      i32.const 1\n      i32.and\n      i32.eqz\n      br_if $block5\n      get_local $1\n      i32.load\n      get_local $5\n      i32.add\n      i32.load\n      set_local $5\n    end ;; $block5\n    get_local $1\n    get_local $3\n    get_local $5\n    call_indirect $0\n    i32.const 0\n    get_local $6\n    i32.const 16\n    i32.add\n    i32.store offset=4\n    i32.const 1\n    )\n  \n  (func $30\n    (param $0 i32)\n    (result i32)\n    i32.const 136\n    get_local $0\n    call $31\n    )\n  \n  (func $31\n    (param $0 i32)\n    (param $1 i32)\n    (result i32)\n    (local $2 i32)\n    (local $3 i32)\n    (local $4 i32)\n    (local $5 i32)\n    (local $6 i32)\n    (local $7 i32)\n    (local $8 i32)\n    (local $9 i32)\n    (local $10 i32)\n    (local $11 i32)\n    (local $12 i32)\n    (local $13 i32)\n    block $block\n      get_local $1\n      i32.eqz\n      br_if $block\n      block $block1\n        get_local $0\n        i32.load offset=8384\n        tee_local $13\n        br_if $block1\n        i32.const 16\n        set_local $13\n        get_local $0\n        i32.const 8384\n        i32.add\n        i32.const 16\n        i32.store\n      end ;; $block1\n      get_local $1\n      i32.const 8\n      i32.add\n      get_local $1\n      i32.const 4\n      i32.add\n      i32.const 7\n      i32.and\n      tee_local $2\n      i32.sub\n      get_local $1\n      get_local $2\n      select\n      set_local $2\n      block $block2\n        block $block3\n          block $block4\n            get_local $0\n            i32.load offset=8388\n            tee_local $10\n            get_local $13\n            i32.ge_u\n            br_if $block4\n            get_local $0\n            get_local $10\n            i32.const 12\n            i32.mul\n            i32.add\n            i32.const 8192\n            i32.add\n            set_local $1\n            block $block5\n              get_local $10\n              br_if $block5\n              get_local $0\n              i32.const 8196\n              i32.add\n              tee_local $13\n              i32.load\n              br_if $block5\n              get_local $1\n              i32.const 8192\n              i32.store\n              get_local $13\n              get_local $0\n              i32.store\n            end ;; $block5\n            get_local $2\n            i32.const 4\n            i32.add\n            set_local $10\n            loop $loop\n              block $block6\n                get_local $1\n                i32.load offset=8\n                tee_local $13\n                get_local $10\n                i32.add\n                get_local $1\n                i32.load\n                i32.gt_u\n                br_if $block6\n                get_local $1\n                i32.load offset=4\n                get_local $13\n                i32.add\n                tee_local $13\n                get_local $13\n                i32.load\n                i32.const -2147483648\n                i32.and\n                get_local $2\n                i32.or\n                i32.store\n                get_local $1\n                i32.const 8\n                i32.add\n                tee_local $1\n                get_local $1\n                i32.load\n                get_local $10\n                i32.add\n                i32.store\n                get_local $13\n                get_local $13\n                i32.load\n                i32.const -2147483648\n                i32.or\n                i32.store\n                get_local $13\n                i32.const 4\n                i32.add\n                tee_local $1\n                br_if $block3\n              end ;; $block6\n              get_local $0\n              call $32\n              tee_local $1\n              br_if $loop\n            end ;; $loop\n          end ;; $block4\n          i32.const 2147483644\n          get_local $2\n          i32.sub\n          set_local $4\n          get_local $0\n          i32.const 8392\n          i32.add\n          set_local $11\n          get_local $0\n          i32.const 8384\n          i32.add\n          set_local $12\n          get_local $0\n          i32.load offset=8392\n          tee_local $3\n          set_local $13\n          loop $loop1\n            get_local $0\n            get_local $13\n            i32.const 12\n            i32.mul\n            i32.add\n            tee_local $1\n            i32.const 8200\n            i32.add\n            i32.load\n            get_local $1\n            i32.const 8192\n            i32.add\n            tee_local $5\n            i32.load\n            i32.eq\n            i32.const 8544\n            call $16\n            get_local $1\n            i32.const 8196\n            i32.add\n            i32.load\n            tee_local $6\n            i32.const 4\n            i32.add\n            set_local $13\n            loop $loop2\n              get_local $6\n              get_local $5\n              i32.load\n              i32.add\n              set_local $7\n              get_local $13\n              i32.const -4\n              i32.add\n              tee_local $8\n              i32.load\n              tee_local $9\n              i32.const 2147483647\n              i32.and\n              set_local $1\n              block $block7\n                get_local $9\n                i32.const 0\n                i32.lt_s\n                br_if $block7\n                block $block8\n                  get_local $1\n                  get_local $2\n                  i32.ge_u\n                  br_if $block8\n                  loop $loop3\n                    get_local $13\n                    get_local $1\n                    i32.add\n                    tee_local $10\n                    get_local $7\n                    i32.ge_u\n                    br_if $block8\n                    get_local $10\n                    i32.load\n                    tee_local $10\n                    i32.const 0\n                    i32.lt_s\n                    br_if $block8\n                    get_local $1\n                    get_local $10\n                    i32.const 2147483647\n                    i32.and\n                    i32.add\n                    i32.const 4\n                    i32.add\n                    tee_local $1\n                    get_local $2\n                    i32.lt_u\n                    br_if $loop3\n                  end ;; $loop3\n                end ;; $block8\n                get_local $8\n                get_local $1\n                get_local $2\n                get_local $1\n                get_local $2\n                i32.lt_u\n                select\n                get_local $9\n                i32.const -2147483648\n                i32.and\n                i32.or\n                i32.store\n                block $block9\n                  get_local $1\n                  get_local $2\n                  i32.le_u\n                  br_if $block9\n                  get_local $13\n                  get_local $2\n                  i32.add\n                  get_local $4\n                  get_local $1\n                  i32.add\n                  i32.const 2147483647\n                  i32.and\n                  i32.store\n                end ;; $block9\n                get_local $1\n                get_local $2\n                i32.ge_u\n                br_if $block2\n              end ;; $block7\n              get_local $13\n              get_local $1\n              i32.add\n              i32.const 4\n              i32.add\n              tee_local $13\n              get_local $7\n              i32.lt_u\n              br_if $loop2\n            end ;; $loop2\n            i32.const 0\n            set_local $1\n            get_local $11\n            i32.const 0\n            get_local $11\n            i32.load\n            i32.const 1\n            i32.add\n            tee_local $13\n            get_local $13\n            get_local $12\n            i32.load\n            i32.eq\n            select\n            tee_local $13\n            i32.store\n            get_local $13\n            get_local $3\n            i32.ne\n            br_if $loop1\n          end ;; $loop1\n        end ;; $block3\n        get_local $1\n        return\n      end ;; $block2\n      get_local $8\n      get_local $8\n      i32.load\n      i32.const -2147483648\n      i32.or\n      i32.store\n      get_local $13\n      return\n    end ;; $block\n    i32.const 0\n    )\n  \n  (func $32\n    (param $0 i32)\n    (result i32)\n    (local $1 i32)\n    (local $2 i32)\n    (local $3 i32)\n    (local $4 i32)\n    (local $5 i32)\n    (local $6 i32)\n    (local $7 i32)\n    (local $8 i32)\n    get_local $0\n    i32.load offset=8388\n    set_local $1\n    block $block\n      block $block1\n        i32.const 0\n        i32.load8_u offset=8630\n        i32.eqz\n        br_if $block1\n        i32.const 0\n        i32.load offset=8632\n        set_local $7\n        br $block\n      end ;; $block1\n      current_memory\n      set_local $7\n      i32.const 0\n      i32.const 1\n      i32.store8 offset=8630\n      i32.const 0\n      get_local $7\n      i32.const 16\n      i32.shl\n      tee_local $7\n      i32.store offset=8632\n    end ;; $block\n    get_local $7\n    set_local $3\n    block $block2\n      block $block3\n        block $block4\n          block $block5\n            get_local $7\n            i32.const 65535\n            i32.add\n            i32.const 16\n            i32.shr_u\n            tee_local $2\n            current_memory\n            tee_local $8\n            i32.le_u\n            br_if $block5\n            get_local $2\n            get_local $8\n            i32.sub\n            grow_memory\n            drop\n            i32.const 0\n            set_local $8\n            get_local $2\n            current_memory\n            i32.ne\n            br_if $block4\n            i32.const 0\n            i32.load offset=8632\n            set_local $3\n          end ;; $block5\n          i32.const 0\n          set_local $8\n          i32.const 0\n          get_local $3\n          i32.store offset=8632\n          get_local $7\n          i32.const 0\n          i32.lt_s\n          br_if $block4\n          get_local $0\n          get_local $1\n          i32.const 12\n          i32.mul\n          i32.add\n          set_local $2\n          get_local $7\n          i32.const 65536\n          i32.const 131072\n          get_local $7\n          i32.const 65535\n          i32.and\n          tee_local $8\n          i32.const 64513\n          i32.lt_u\n          tee_local $6\n          select\n          i32.add\n          get_local $8\n          get_local $7\n          i32.const 131071\n          i32.and\n          get_local $6\n          select\n          i32.sub\n          get_local $7\n          i32.sub\n          set_local $7\n          block $block6\n            i32.const 0\n            i32.load8_u offset=8630\n            br_if $block6\n            current_memory\n            set_local $3\n            i32.const 0\n            i32.const 1\n            i32.store8 offset=8630\n            i32.const 0\n            get_local $3\n            i32.const 16\n            i32.shl\n            tee_local $3\n            i32.store offset=8632\n          end ;; $block6\n          get_local $2\n          i32.const 8192\n          i32.add\n          set_local $2\n          get_local $7\n          i32.const 0\n          i32.lt_s\n          br_if $block3\n          get_local $3\n          set_local $6\n          block $block7\n            get_local $7\n            i32.const 7\n            i32.add\n            i32.const -8\n            i32.and\n            tee_local $5\n            get_local $3\n            i32.add\n            i32.const 65535\n            i32.add\n            i32.const 16\n            i32.shr_u\n            tee_local $8\n            current_memory\n            tee_local $4\n            i32.le_u\n            br_if $block7\n            get_local $8\n            get_local $4\n            i32.sub\n            grow_memory\n            drop\n            get_local $8\n            current_memory\n            i32.ne\n            br_if $block3\n            i32.const 0\n            i32.load offset=8632\n            set_local $6\n          end ;; $block7\n          i32.const 0\n          get_local $6\n          get_local $5\n          i32.add\n          i32.store offset=8632\n          get_local $3\n          i32.const -1\n          i32.eq\n          br_if $block3\n          get_local $0\n          get_local $1\n          i32.const 12\n          i32.mul\n          i32.add\n          tee_local $1\n          i32.const 8196\n          i32.add\n          i32.load\n          tee_local $6\n          get_local $2\n          i32.load\n          tee_local $8\n          i32.add\n          get_local $3\n          i32.eq\n          br_if $block2\n          block $block8\n            get_local $8\n            get_local $1\n            i32.const 8200\n            i32.add\n            tee_local $5\n            i32.load\n            tee_local $1\n            i32.eq\n            br_if $block8\n            get_local $6\n            get_local $1\n            i32.add\n            tee_local $6\n            get_local $6\n            i32.load\n            i32.const -2147483648\n            i32.and\n            i32.const -4\n            get_local $1\n            i32.sub\n            get_local $8\n            i32.add\n            i32.or\n            i32.store\n            get_local $5\n            get_local $2\n            i32.load\n            i32.store\n            get_local $6\n            get_local $6\n            i32.load\n            i32.const 2147483647\n            i32.and\n            i32.store\n          end ;; $block8\n          get_local $0\n          i32.const 8388\n          i32.add\n          tee_local $2\n          get_local $2\n          i32.load\n          i32.const 1\n          i32.add\n          tee_local $2\n          i32.store\n          get_local $0\n          get_local $2\n          i32.const 12\n          i32.mul\n          i32.add\n          tee_local $0\n          i32.const 8196\n          i32.add\n          get_local $3\n          i32.store\n          get_local $0\n          i32.const 8192\n          i32.add\n          tee_local $8\n          get_local $7\n          i32.store\n        end ;; $block4\n        get_local $8\n        return\n      end ;; $block3\n      block $block9\n        get_local $2\n        i32.load\n        tee_local $8\n        get_local $0\n        get_local $1\n        i32.const 12\n        i32.mul\n        i32.add\n        tee_local $3\n        i32.const 8200\n        i32.add\n        tee_local $1\n        i32.load\n        tee_local $7\n        i32.eq\n        br_if $block9\n        get_local $3\n        i32.const 8196\n        i32.add\n        i32.load\n        get_local $7\n        i32.add\n        tee_local $3\n        get_local $3\n        i32.load\n        i32.const -2147483648\n        i32.and\n        i32.const -4\n        get_local $7\n        i32.sub\n        get_local $8\n        i32.add\n        i32.or\n        i32.store\n        get_local $1\n        get_local $2\n        i32.load\n        i32.store\n        get_local $3\n        get_local $3\n        i32.load\n        i32.const 2147483647\n        i32.and\n        i32.store\n      end ;; $block9\n      get_local $0\n      get_local $0\n      i32.const 8388\n      i32.add\n      tee_local $7\n      i32.load\n      i32.const 1\n      i32.add\n      tee_local $3\n      i32.store offset=8384\n      get_local $7\n      get_local $3\n      i32.store\n      i32.const 0\n      return\n    end ;; $block2\n    get_local $2\n    get_local $8\n    get_local $7\n    i32.add\n    i32.store\n    get_local $2\n    )\n  \n  (func $33\n    (param $0 i32)\n    (local $1 i32)\n    (local $2 i32)\n    (local $3 i32)\n    block $block\n      block $block1\n        get_local $0\n        i32.eqz\n        br_if $block1\n        i32.const 0\n        i32.load offset=8520\n        tee_local $2\n        i32.const 1\n        i32.lt_s\n        br_if $block1\n        i32.const 8328\n        set_local $3\n        get_local $2\n        i32.const 12\n        i32.mul\n        i32.const 8328\n        i32.add\n        set_local $1\n        loop $loop\n          get_local $3\n          i32.const 4\n          i32.add\n          i32.load\n          tee_local $2\n          i32.eqz\n          br_if $block1\n          block $block2\n            get_local $2\n            i32.const 4\n            i32.add\n            get_local $0\n            i32.gt_u\n            br_if $block2\n            get_local $2\n            get_local $3\n            i32.load\n            i32.add\n            get_local $0\n            i32.gt_u\n            br_if $block\n          end ;; $block2\n          get_local $3\n          i32.const 12\n          i32.add\n          tee_local $3\n          get_local $1\n          i32.lt_u\n          br_if $loop\n        end ;; $loop\n      end ;; $block1\n      return\n    end ;; $block\n    get_local $0\n    i32.const -4\n    i32.add\n    tee_local $3\n    get_local $3\n    i32.load\n    i32.const 2147483647\n    i32.and\n    i32.store\n    )\n  \n  (func $34\n    (param $0 i32)\n    (param $1 i32)\n    (param $2 i32)\n    (result i32)\n    (local $3 i32)\n    (local $4 i32)\n    (local $5 i32)\n    i32.const 0\n    set_local $5\n    block $block\n      get_local $2\n      i32.eqz\n      br_if $block\n      block $block1\n        loop $loop\n          get_local $0\n          i32.load8_u\n          tee_local $3\n          get_local $1\n          i32.load8_u\n          tee_local $4\n          i32.ne\n          br_if $block1\n          get_local $1\n          i32.const 1\n          i32.add\n          set_local $1\n          get_local $0\n          i32.const 1\n          i32.add\n          set_local $0\n          get_local $2\n          i32.const -1\n          i32.add\n          tee_local $2\n          br_if $loop\n          br $block\n        end ;; $loop\n      end ;; $block1\n      get_local $3\n      get_local $4\n      i32.sub\n      set_local $5\n    end ;; $block\n    get_local $5\n    )\n  \n  (func $35\n    unreachable\n    ))',
  wasm: '',
  abi:
   { version: 'eosio::abi/1.0',
     types: [],
     structs: [ [Object] ],
     actions: [ [Object] ],
     tables: [],
     ricardian_clauses: [],
     error_messages: [],
     abi_extensions: [] } }
// * **/

// //todo ------------------------------------------------------------------------get_table_rowsdd
options = {
    method: 'POST',
    url: 'http://mainnet.eoscanada.com/v1/chain/get_table_rows',
    body: {scope: 'eosio.token', code: 'eosio.token', table: 'balance', json: 'true'},
    json: true
};
// /*
// * { rows:
//    [ { id: 1,
//        winner: 0,
//        player1: 0,
//        player2: 0,
//        createtime: 1529052195,
//        owner: 'user1' },
//      { id: 2,
//        winner: 0,
//        player1: 0,
//        player2: 0,
//        createtime: 1529052205,
//        owner: 'user2' } ],
//   more: false }
//
// * **/
//
// //todo ------------------------------------------------------------------------get_currency_balance
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/chain/get_currency_balance',
//     body: {
//         code: 'eosio.token',
//         account: 'eosio',
//         symbol: 'SYS'
//     },
//     json: true
// };
// /*
// *[ '6880.0000 SYS' ]
// * **/
//
// //todo -------------------------------------wallet-----------------------------------create
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/wallet/create',
//     body: 'ccc',
//     json: true
// };
// //PW5JS9CDZUohfMr22SYwFNdNsGbs6NjWqCLX2PyZ1F3msiTEtfnBL
//
// //todo -------------------------------------wallet-----------------------------------open
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/wallet/open',
//     body: 'ccc',
//     json: true
// };
//
// //{}
// //todo -------------------------------------wallet-----------------------------------lock
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/wallet/lock',
//     body: 'ccc',
//     json: true
// };
// //{}
// //todo -------------------------------------wallet-----------------------------------lock_all
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/wallet/lock_all'
// };
// //{}
//
// //todo -------------------------------------wallet-----------------------------------unlock
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/wallet/unlock',
//     body: ["ccc", "PW5JS9CDZUohfMr22SYwFNdNsGbs6NjWqCLX2PyZ1F3msiTEtfnBL"],
//     json: true
// };
// //{}
// //todo -------------------------------------wallet-----------------------------------import_key
// options = {
//     method: 'POST',
//     url: 'http://mainnet.eoscanada.com/v1/wallet/import_key',
//     body: ["ccc", "5KdbxuWE1C1YvezhWNBEwngcrwWa1UNjaRzu5zNzkFPA9E6hnLY"],
//     json: true
// };
// //{}
//
// //todo -------------------------------------wallet-----------------------------------list_wallets
// // options = {
// //     method: 'POST',
// //     url: 'http://mainnet.eoscanada.com/v1/wallet/list_wallets'
// // };
// //todo -------------------------------------wallet-----------------------------------list_wallets
// // options = {
// //     method: 'POST',
// //     url: 'http://mainnet.eoscanada.com/v1/wallet/get_public_keys'
// // };
// //[]
//
// //todo -------------------------------------wallet-----------------------------------set_timeout
// // options = { method: 'POST',
// //     url: 'http://mainnet.eoscanada.com/v1/wallet/set_timeout',
// //     body: 600,
// //     json: true };
// //{}

request(options, function (error, response, body) {
    if (error) {
        console.log(error);
        throw new Error(error);
    }


    console.log(body);
});
