export default async function Store() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
