import useSWR from 'swr'

export function verify(username, password) {
    return new Promise((resolve) => {
        api_grabber("validate",username,password).then((js) => {
            if (js.code === "SUCCESS") {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
    
}

export function api_grabber(opt, username, password) {
    return new Promise((resolve) => {
        // console.log({ username: username, password: password, "opt": opt})
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

export function get_schedule_swr(username, password) {
    const { data, error } = useSWR(['get_schedule', username, password], api_grabber)

    return {
      schedule: data,
      isLoading: !error && !data,
      isError: error
    }
}
export function get_student_info_swr(username, password) {
    const { data, error } = useSWR(['get_student_info', username, password], api_grabber)

    return {
      student_info: data,
      isLoading: !error && !data,
      isError: error
    }
}


export function get_schedule(context) {
    return {
        schedule: context.get_schedule.data,
        isLoading: context.get_schedule.loading,
        isError: context.get_schedule.error
    }
}
export function get_student_info(context) {
    return {
        student_info: context.get_student_info.data,
        isLoading: context.get_student_info.loading,
        isError: context.get_student_info.error
    }
}
export function get_gradebook(context) {
    return {
        gradebook: context.get_gradebook.data,
        isLoading: context.get_gradebook.loading,
        isError: context.get_gradebook.error
    }
}
export function get_school_info(context) {
    return {
        school_info: context.get_school_info.data,
        isLoading: context.get_school_info.loading,
        isError: context.get_school_info.error
    }
}

export function is_refreshing(context) {
    return context.refreshing != 0
}