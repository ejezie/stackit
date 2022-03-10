import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    const location = useLocation();
    const navigation = useNavigate();
    let [page, setPage] = useSearchParams();
    // let match = useMatch();

    return(
        <WrappedComponent {...props} setPage={setPage} page={page} params={params} location={location} navigation={navigation} />
    )
}

export default withRouter