"use server";

export async function createhr(
  message: { message: string },
  formData: FormData
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(`Creating HR: ${name}, ${email}, ${password}`);
  
  return {
    message: `HR ${name} created successfully!`,
  };
}
