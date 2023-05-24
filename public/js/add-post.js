async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-content"]').value;

  try {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.log(err);
    alert("An error occurred. Please try again.");
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
