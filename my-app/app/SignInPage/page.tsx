import Link from "next/link";

export default function Page1() {
  return (
    <>
      <h1>Basic Sign in Here</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id="" />
        <button type="submit"></button>
      </form>
      <Link href="/SignUpPage" passHref>
        <button>Sign Up</button>
      </Link>

      <p>Disclaimer: make a mock email and name.</p>
    </>
  );
}
