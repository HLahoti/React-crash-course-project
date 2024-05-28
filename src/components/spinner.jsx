import { ClipLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "100px auto",

}

const spinner = ({ loading }) => {
    return (
        // <div>spinner</div>
        <ClipLoader
            color='#4338ca'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    )
}

export default spinner
