import { IPost } from "../..";
import { relativeDateFormatted } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
    post: IPost;
}

export function PostComponent({ post }: PostProps) {
    const formattedDate = relativeDateFormatted(post.created_at)

    return (
        <PostContainer to={`/post/${post.number}`}>
            <div>
                <strong>{post.title}</strong>
                <span>{formattedDate}</span>
            </div>

            <p>
                {post.body}
            </p>
        </PostContainer>
    )
}
