async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.href.split("/").pop();
  const content = document.querySelector('#content').value;

  try {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
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

document.querySelector(".edit-post-form").addEventListener("submit", editFormHandler);
