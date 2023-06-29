import { call, put, takeEvery } from "redux-saga/effects";
import { PostFail, PostSuc } from "../action/postAction";

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  };

function* asncPostSaga()
{

    try
    {
      const data =   yield call(fetchPosts);

      yield put(PostSuc(data))

    }
    catch(e)
    {

        yield put(PostFail(e))
    }

}

export function* watchGetPost()
{

    yield takeEvery('POST_REQ',asncPostSaga)
}