import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiMessageRoundedAdd } from "react-icons/bi";

function Header({ isOn }) {
  const modalRef = useRef();
  const handleToggleModal = useCallback((e) => {
    e.stopPropagation();
    console.log(e.target);
    if (
      e.target.id === "friend-modal-bg" ||
      e.target.className.baseVal === "add-friend"
    ) {
      modalRef.current.classList.toggle("hidden");
    }
  });
  const handleFindFriend = (e) => {
    e.preventDefault();
    console.log(findName);
    setFindName("");
  };
  const [findName, setFindName] = useState("");
  const onChange = (e) => {
    setFindName(e.target.value);
  };
  function numberMaxLength(e) {
    if (e.target.textLength > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }
  return (
    <StHeader>
      {!isOn ? (
        <>
          <h1>친구</h1>
          <AiOutlineUserAdd
            className="add-friend"
            onClick={handleToggleModal}
          />
        </>
      ) : (
        <>
          <h1>채팅</h1>
          <BiMessageRoundedAdd className="create-chatroom" />
        </>
      )}
      <StFriendModal
        ref={modalRef}
        className="hidden"
        onClick={handleToggleModal}
        id="friend-modal-bg"
      >
        <div className="friend-modal-body" nameLength={findName.length}>
          <h2>친구 추가</h2>
          <span>ID로 추가</span>
          <form onSubmit={handleFindFriend}>
            <input
              onChange={onChange}
              onInput={numberMaxLength}
              value={findName}
              maxLength="20"
            />
            <span>{`${findName.length}/20`}</span>

            <button>찾기</button>
          </form>
        </div>
      </StFriendModal>
    </StHeader>
  );
}

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: calc(100vw - 66px);
  height: 76px;
  background-color: #ffffff;

  padding: 30px 20px 10px 0;
  h1 {
    height: 28px;
    text-align: center;
    font-size: 1.15rem;
    padding-left: 20px;
  }
  svg {
    width: 30px;
    height: 30px;
    padding: 3px;
    :hover {
      background-color: #fcfcfc;
      border-radius: 50%;
    }
  }
`;

const StFriendModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000aa;
  .friend-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: calc((100vh - 460px) / 2);
    left: calc((100% - 400px) / 2);
    width: 360px;
    height: 460px;
    background-color: #fff;
    padding-top: 30px;
    h2 {
      padding-bottom: 30px;
    }
    span {
      width: 100%;
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 3px solid #f6f6f6;
    }
    form {
      position: relative;
      margin-top: 20px;
      display: flex;
      input {
        width: calc(340px - 74px);
        height: 28px;
        border: none;
        border-bottom: 2px solid #f6f6f6;
        font-size: 1rem;
        padding-right: 37px;
        :focus {
          outline: none;
          border-color: #000;
        }
      }
      span {
        position: absolute;
        top: 5px;
        right: 60px;
        width: 30px;
        border: none;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        color: #9e9fa1;
      }
      button {
        margin-left: 8px;
        width: 48px;
        height: 28px;
        background-color: #ffec42;
        border: 1px solid #e8d73f;
        border-radius: 5px;
        ${({ nameLength }) => {
          switch (nameLength > 0) {
            case true:
              return css`
                color: rgba(0, 0, 0, 1);
              `;
            default:
              return css`
                color: rgba(0, 0, 0, 0.3);
              `;
          }
        }}
      }
    }
  }
`;
export default Header;
