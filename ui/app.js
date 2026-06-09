async function generatePassport() {
  const result = document.getElementById("result");

  const payload = {
    company: document.getElementById("company").value,
    purpose: document.getElementById("purpose").value,
    data: document.getElementById("data").value,
  };

  result.classList.remove("hidden");
  result.textContent = "Generating AI Passport...";

  try {
    const response = await fetch("http://localhost:5678/webhook/confidential-ai-passport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    result.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    result.textContent = "Error generating passport: " + error.message;
  }
}