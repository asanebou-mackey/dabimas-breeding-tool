// 馬データ
const horses = {
  "ディープインパクト": { type: "sire", parentLine: "Royal Charger" },
  "キングカメハメハ": { type: "sire", parentLine: "Native Dancer" },
  "ロードカナロア": { type: "sire", parentLine: "Native Dancer" },
  "ウインドインハーヘア": { type: "mare", parentLine: "Nearctic" },
  "アパパネ": { type: "mare", parentLine: "Native Dancer" },
  "ラヴズオンリーユー": { type: "mare", parentLine: "Royal Charger" },
};

// 配合判定関数（簡易版）
function evaluatePair(sireName, mareName) {
  const sire = horses[sireName];
  const mare = horses[mareName];

  // 馬データが不足している場合
  if (!sire || !mare) {
    return { rank:"不明", comment:"馬データが不足しています。" };
  }

  // 親系統の種類を数える
  const setOfLines = new Set([sire.parentLine, mare.parentLine]);
  const totalLinesCount = setOfLines.size;

  // 配合ランクとコメントを判定
  let rank, comment;
  if (sire.parentLine === mare.parentLine) {
    rank = "危険な配合";
    comment = "同じ親系統なので気性・体質リスクが高まります。";
  } else if (totalLinesCount >= 2) { // 簡易判定
    rank = "面白い配合";
    comment = "親系統の多様性があり、勝負根性に期待できます。";
  } else {
    rank = "標準配合";
    comment = "目立った配合理論はありませんが安定的です。";
  }

  return { rank, comment };
}

// HTML要素取得
const checkBtn = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");

// クリック時に配合結果を表示
checkBtn.addEventListener("click", function() {
  const sire = document.getElementById("sire").value;
  const mare = document.getElementById("mare").value;
  const result = evaluatePair(sire, mare);

  resultDiv.innerHTML = `
    <strong>${sire} ✖︎ ${mare}</strong><br>
    <strong>${result.rank}</strong><br>
    <span class="comment">${result.comment}</span>
  `;
});
