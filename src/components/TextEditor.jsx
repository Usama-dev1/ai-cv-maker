import {
  BtnBold,
  BtnItalic,
  BtnBulletList,
  BtnUndo,
  BtnClearFormatting,
  BtnRedo,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnLink,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";

export default function CustomEditor({ id, value, handleChangeInput }) {
  const onChange = (e) => {
    handleChangeInput({
      target: {
        id: id,
        value: e.target.value
      },
    });
  };

  return (
    <div style={{ backgroundColor: "white", padding: "1px" }}>
      <EditorProvider>
        <Editor
          value={value} // Ensure value is correctly passed
          onChange={onChange} // Pass the handler correctly
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnBulletList />
            <BtnNumberedList />
            <BtnStrikeThrough />
            <BtnClearFormatting />
            <BtnRedo />
            <BtnStyles />
            <BtnLink />
            <BtnUndo />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}
