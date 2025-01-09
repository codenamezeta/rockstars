const url = 'http://localhost:1337'

const myHeaders = new Headers()
myHeaders.append(
  'Authorization',
  'Bearer e15a3cf61c33d92d30c7639948581a0d78cc74732f8c5ceba07af8632f8abd1264cce4f21bf042e2f83ba537f7a6114f9d527ce1c8a8b51a3bdba0f85ef45ce55009cc597a5c1aac854173a46f6c8f34c2c30e600dd8457519ee11b46357ff0214f7dfd2de38d3d31dd6f4931eb865a97691a829b81b2a75d464de8239a7fc2b'
)

//* EVENTS

export async function getAllEvents() {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(`${url}/api/events`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching events:', error)
    return null
  }
}

export async function getEventById(id: string) {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(`${url}/api/events/${id}`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching event by ID:', error)
    return null
  }
}

//* VENUES
export async function getAllVenues() {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(`${url}/api/venues`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching venues:', error)
    return null
  }
}

export async function getVenueById(id: string) {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(`${url}/api/venues/${id}`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching venue by ID:', error)
    return null
  }
}

//* PERFORMERS
export async function getAllPerformers() {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(`${url}/api/performers`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching performers:', error)
    return null
  }
}

export async function getPerformerById(id: string) {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(`${url}/api/performers/${id}`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching performer by ID:', error)
    return null
  }
}

//* ARTICLES
export async function getAllArticles() {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(`${url}/api/articles`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching articles:', error)
    return null
  }
}

export async function getArticleById(id: string) {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  try {
    const response = await fetch(
      `${url}/api/articles/${id}?populate=*`,
      requestOptions
    )
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching article by ID:', error)
    return null
  }
}
