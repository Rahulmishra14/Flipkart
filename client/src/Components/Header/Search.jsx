import React, { useEffect, useState } from "react";
import { styled, InputBase, Box, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Actions/product-action";
import { Link } from "react-router-dom";

const SearchBase = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  color: black;
  padding: 5px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getText = (searchText) => {
    setText(searchText);
    setOpen(false)
  };
  return (
    <SearchBase>
      <InputSearchBase
        placeholder="Search for products, brands and more" value={text}
        onChange={(e) => getText(e.target.value)}
      ></InputSearchBase>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <ListWrapper hidden={open}>
      {text &&
        products
          .filter((product) =>
            product.title.longTitle.toLowerCase().includes(text.toLowerCase())
          )
          .map((product) => (
            <ListItem>
              <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setOpen(true)}
            >
              {product.title.longTitle}
            </Link>
              {product.title.longTitle}
            </ListItem>
          ))}
          </ListWrapper>
    </SearchBase>
  );
};

export default Search;
