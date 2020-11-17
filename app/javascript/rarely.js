data = [
  //Rのデータ
  {"title":"R-1",
  "rarelity":1},
  {"title":"R-2",
  "rarelity":1},
  {"title":"R-3",
  "rarelity":1},
  {"title":"R-4",
  "rarelity":1},
  {"title":"R-5",
  "rarelity":1},
  {"title":"R-6",
  "rarelity":1},
  {"title":"R-7",
  "rarelity":1},
  {"title":"R-8",
  "rarelity":1},
  {"title":"R-9",
  "rarelity":1},
  {"title":"R-10",
  "rarelity":1},
  {"title":"R-11",
  "rarelity":1},
  {"title":"R-12",
  "rarelity":1},
  {"title":"R-13",
  "rarelity":1},
  {"title":"R-14",
  "rarelity":1},
  {"title":"R-15",
  "rarelity":1},
  {"title":"R-16",
  "rarelity":1},
  {"title":"R-17",
  "rarelity":1},
  {"title":"R-18",
  "rarelity":1},
  {"title":"R-19",
  "rarelity":1},
  {"title":"R-20",
  "rarelity":1},

  //SRのデータ
  {"title":"SR-1",
  "rarelity":2},
  {"title":"SR-2",
  "rarelity":2},
  {"title":"SR-3",
  "rarelity":2},
  {"title":"SR-4",
  "rarelity":2},
  {"title":"SR-5",
  "rarelity":2},
  {"title":"SR-6",
  "rarelity":2},
  {"title":"SR-7",
  "rarelity":2},
  {"title":"SR-8",
  "rarelity":2},
  {"title":"SR-9",
  "rarelity":2},
  {"title":"SR-10",
  "rarelity":2},

  //SSRのデータ
  {"title":"SSR-1",
  "rarelity":3},
  {"title":"SSR-2",
  "rarelity":3},
  {"title":"SSR-3",
  "rarelity":3},
  {"title":"SSR-4",
  "rarelity":3},
  {"title":"SSR-5",
  "rarelity":3},
]

$(function(){
  function createResult(){
    // ランダムな数を作る関数を定義
    function randomChoice(array, num){
        const arr = array.concat();
        const choiced = []
        let l = array.length;
        let n = Math.min(num, array.length);
        while(n-- > 0){
            let i = Math.floor(Math.random() * l--);
            choiced.push(arr[i]);
            arr.splice(i, 1);
        }
        return choiced;
    }
    // 全データからランダムに9枚持ってくる
    result = randomChoice(data, 9);

    // 3だけのデータからランダムに1枚持ってきて9枚に足す
    r5data = data.filter((datum) => {
        return datum.rarelity === 3
    })
    result.push(randomChoice(r3data, 1)[0]);
 }
 
    $('try').on('click', function(){
        createResult();
      $("te").text("結果");
      })
})