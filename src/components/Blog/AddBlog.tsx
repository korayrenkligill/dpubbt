import { Button, Chip, TextField } from "@mui/material";
import "../../styles/components/Blog/AddBlog.scss";
import { useSetAtom } from "jotai";
import { addBlogPageAtom } from "../../pages/Global/Blogs";
import { GoDot } from "react-icons/go";
import { LiaHashtagSolid } from "react-icons/lia";
import { useState } from "react";
import { motion } from "framer-motion";
import ReactQuill from "react-quill";

type Props = {};

const AddBlog = (props: Props) => {
  const setAddBlogPage = useSetAtom(addBlogPageAtom);

  const [categories] = useState<string[]>([
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
  ]);
  const [description, setDescription] = useState<string>("");

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ size: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleChangeDescription = (html: string) => {
    setDescription(html);
  };

  const changeCategories = (newCategory: string) => () => {
    if (selectedCategories.includes(newCategory)) {
      const changedCategories = selectedCategories.filter(
        (category: string) => category !== newCategory
      );
      setSelectedCategories(changedCategories);
    } else {
      setSelectedCategories((oldCategories) => [...oldCategories, newCategory]);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setAddBlogPage(false);
  };

  return (
    <motion.div
      className="add-blog"
      onMouseDown={() => setAddBlogPage(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        onMouseDown={(e) => e.stopPropagation()}
        className="custom-container"
        onSubmit={onSubmit}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        exit={{ y: 20 }}
      >
        <div className="container-title">
          <h1 className="title-font">
            <LiaHashtagSolid /> Blog Ekle
          </h1>
          <p>
            <GoDot /> Lorem ipsum dolor sit amet.
          </p>
        </div>
        <TextField
          size="small"
          id="outlined-basic"
          label="blog başlığı"
          variant="outlined"
          className="input"
        />
        <ReactQuill
          onChange={handleChangeDescription}
          value={description}
          modules={modules}
          formats={formats}
          bounds={".app"}
          placeholder={"Bir şeyler yaz..."}
        />
        <div className="categories">
          {categories.map((item, key) => {
            return (
              <motion.span className="category">
                <Chip
                  label={item}
                  color={
                    selectedCategories.includes(item) ? "primary" : "default"
                  }
                  onClick={changeCategories(item)}
                />
              </motion.span>
            );
          })}
        </div>
        <Button variant="contained" type="submit">
          Ekle
        </Button>
      </motion.form>
    </motion.div>
  );
};

export default AddBlog;
