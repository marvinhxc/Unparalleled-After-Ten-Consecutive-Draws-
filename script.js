const htmlContent = document.getElementById(
  "immersive-reader-content"
).innerHTML;

const data = {
  chunks: [
    {
      content: htmlContent,
      mimeType: "text/html",
    },
  ],
};
