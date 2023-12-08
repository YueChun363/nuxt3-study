export const useRequest = async (url: any, options?: any, headers?: any) => {
  try {
    const config = useRuntimeConfig()
    const reqUrl = config.public.baseUrl + url
    const key = Date.now()

    const customHeader = { token: useCookie('token').value, ...headers }

    const { data } = await useFetch(reqUrl, ...options, key, headers: customHeader)

    const result = data.value as any

    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
