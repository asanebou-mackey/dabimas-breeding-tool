const checkBtn = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", function() {
  const sire = document.getElementById("sire").value;
  const mare = document.getElementById("mare").value;
  resultDiv.innerHTML = `配合結果: ${sire} ✖︎ ${mare}`;
});
