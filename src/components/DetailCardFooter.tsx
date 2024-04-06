import styled from "@emotion/styled";
import getFontStyle from "@theme/font/getFontSize";
import { colors } from "@theme";
import { Response, postReactions } from "@api";
import { REACTION_TYPE, ReactionObject } from "@api/response";
import { getReactionCount } from "@utils/getReactionCount";

interface DetailCardFooterProps {
    boardId: number;
    reactions: ReactionObject[];
}

const DetailCardFooter = ({ boardId, reactions }: DetailCardFooterProps) => {

    const post = async (reactionType: keyof typeof REACTION_TYPE, id: number) => {
        const res = (await postReactions(reactionType, id)) as Response<unknown>;
        if (res.status === 409) {
            window.alert('이미 공감한 글입니다!')
            return;
        }
        window.location.reload();     
    }

    const { ADMIRE, GREAT, MOVING } = getReactionCount(reactions);

    return (
        <Wrapper>
            <div>
                <ButtonText onClick={() => post(REACTION_TYPE.ADMIRE, boardId)}>추앙해요 {ADMIRE}</ButtonText>
                <ButtonText onClick={() => post(REACTION_TYPE.MOVING, boardId)}>감동이에요 {MOVING}</ButtonText>
                <ButtonText onClick={() => post(REACTION_TYPE.GREAT, boardId)}>대단해요 {GREAT}</ButtonText>
            </div>
        </Wrapper>
    );
};

export default DetailCardFooter;

const Wrapper = styled.section`

    width: 100%;
    height: 64px;

    background-color: white;
    ${getFontStyle("header4")};
    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 16px;
    padding-right: 16px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
`

const ButtonText = styled.div`
    width: 89px;
    height: 32px;
    border-radius: 16px;

    background-color: #3D582B10;

    display: flex;
    justify-content: space-around;
    align-items: center;

    ${getFontStyle('caption1')}
    color: ${colors.primary};
`