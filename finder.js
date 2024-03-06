const input = document.querySelector('.search_input')
const button = document.querySelector('.search_button')
const select = document.querySelector('.search_select')

button.addEventListener('click', request)

function request(event) {
    event.preventDefault()

    const value = input.value
    const search = select.value

    let params
    if (search === 'Google' || search === 'Bing') {
        params = '/search?q='
    }
    else if (search === 'Yandex') {
        params = '/search?text='
    }
    else if (search === 'DuckDuckGo') {
        params = '?q='
    }

    window.location.href = `https://www.${search}.com/${params}` + value
}
