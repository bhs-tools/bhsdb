import { get_student_info } from '../lib/clientvue';
export default function TestStudentInfo(props) {
    const { student_info, isLoading, isError } = get_student_info(props.username, props.password); 
    if (isLoading) {
        return <div> Loading... </div>;
    }
    if (isError) {
        return <div> Error! </div>
    }
    return (
        <div> { student_info.content.FormattedName } </div>
    )
}
