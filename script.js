document.getElementById("resultForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const session = document.getElementById("session").value;
  const degree = document.getElementById("degree").value;
  const semester = document.getElementById("semester").value;
  const rollno = document.getElementById("rollno").value.trim();
  const father = document.getElementById("father").value.trim();

  // Format the file name
  const safeFather = father.replace(/\s+/g, " ");
  const fileName = `${degree}_${session}_${semester}_${rollno}_${safeFather}`;
  const filePath = `files/${fileName}/result.pdf`;

  // Download file
  const link = document.createElement("a");
  link.href = filePath;
  link.download = filePath;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 
});
