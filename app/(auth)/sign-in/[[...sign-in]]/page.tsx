import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  )
}

export default SignInPage