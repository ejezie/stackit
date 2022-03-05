import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    const location = useLocation();
    const navigation = useNavigate();
    const search = useSearchParams();

    return(
        <WrappedComponent {...props} search={search} params={params} location={location} navigation={navigation} />
    )
}

export default withRouter