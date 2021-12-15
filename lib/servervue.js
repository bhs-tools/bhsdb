const StudentVue = require("./svue.js")
import { patched }  from "./patchedRequest.js"
// this file should be easy to make faster!
function StudentVueError(message) {
    const error = new Error(message);
    error.code = "STUDENTVUE"
    return error;
  }
  
StudentVueError.prototype = Object.create(Error.prototype);

const soap_options = {
    httpClient: patched
}

export async function get_student_info(username,password) {
    let client = await StudentVue.login('https://wa-beth-psv.edupoint.com', username, password, soap_options)
    let data = await client.getStudentInfo()
    data = JSON.parse(data)
    if (data.hasOwnProperty("RT_ERROR")) {
        throw StudentVueError(data.RT_ERROR.ERROR_MESSAGE)
    }
    return data
}

export async function get_school_info(username,password) {
    let client = await StudentVue.login('https://wa-beth-psv.edupoint.com', username, password, soap_options)
    let data = await client.getSchoolInfo()
    data = JSON.parse(data)
    if (data.hasOwnProperty("RT_ERROR")) {
        throw StudentVueError(data.RT_ERROR.ERROR_MESSAGE)
    }
    return data
}

export async function get_schedule(username,password,term) {
    let client = await StudentVue.login('https://wa-beth-psv.edupoint.com', username, password, soap_options)
    let data = await client.getSchedule(term)
    data = JSON.parse(data)
    if (data.hasOwnProperty("RT_ERROR")) {
        throw StudentVueError(data.RT_ERROR.ERROR_MESSAGE)
    }
    return data
}

export async function get_gradebook(username,password, term) {
    let client = await StudentVue.login('https://wa-beth-psv.edupoint.com', username, password, soap_options)
    let data = await client.getGradebook(term)
    data = JSON.parse(data)
    if (data.hasOwnProperty("RT_ERROR")) {
        throw StudentVueError(data.RT_ERROR.ERROR_MESSAGE)
    }
    return data
}
