export default function ({ route, redirect }) {
  const queryArr = Object.keys(route.query)

  if (queryArr.length > 0) {
    redirect('https://disney.com')
  }
}