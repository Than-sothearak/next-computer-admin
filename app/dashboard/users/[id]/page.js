import UserForm from "@/components/UserForm";

export default async function SingleUserPage({ params }) {
 const userId = await params.id
  return (
    <>
    <UserForm userId={userId}/>
    </>
  );
}
