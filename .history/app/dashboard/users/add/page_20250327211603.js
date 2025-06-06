import { auth } from "@/auth";
import UserForm from "@/components/UserForm";
import { redirect } from "next/navigation";

export default async function addUserPage() {
  const session = await auth();
  if (!session?.user?.isAdmin) {
    redirect("/dashboard"); // Redirect non-admins
  }
  return (
    <UserForm />
  );
}
