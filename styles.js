import styled from "@emotion/styled"
export const Nav = styled("div")`
  & > * {
    margin-left: 10em;
    color: white;
  }
  background: black;
  padding: 10em;
  height: 10em;
  display: flex;
  align-items: center;
`
export const PageBody = styled("div")`
  width: 100%;
  height: 100%;
  padding: 0em;

  `


  export const TabHead = styled("div")`
  border-bottom: 1px solid black;
  display: flex;
  background: black;
`
export const TabContainer = styled("div")`
  width: 30em;
  height: 30em;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
`
export const TabBody = styled(PageBody)`
  height: 100%;
`
export const Tab = styled("div")`
  padding: 1em;
  background: ${({ selected }) => (selected ? "grey" : "black")};
  * {
    color: white;
    `