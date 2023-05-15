async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.href.split("/").pop();

  try {
    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.log(err);
    alert("An error occurred. Please try again.");
  }
}

document.querySelector(".delete-post-btn").addEventListener("click", deleteFormHandler);
