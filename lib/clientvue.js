import useSWR from 'swr'

export function verify(username, password) {
    return new Promise((resolve) => {
        fetch('/api/validate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then((r) => r.json()).then((js) => {
            if (js.code === "SUCCESS") {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
    
}

function api_grabber(opt, username, password) {
    return new Promise((resolve) => {
        console.log({ username: username, password: password, "opt": opt})
        fetch('/api/' + opt, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then((r) => r.json()).then((js) => {
            resolve(js)
        })
    })
}

export function get_schedule(username, password) {
    const { data, error } = useSWR(['get_schedule', username, password], api_grabber)

    return {
      schedule: data,
      isLoading: !error && !data,
      isError: error
    }
}
export function get_student_info(username, password) {
    const { data, error } = useSWR(['get_student_info', username, password], api_grabber)

    return {
      student_info: data,
      isLoading: !error && !data,
      isError: error
    }
}