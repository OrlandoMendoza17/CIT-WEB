import { Editor, useEditor } from '@tiptap/react'
import { FaBold, FaItalic, FaStrikethrough, FaCode } from "react-icons/fa6";
import { FaListUl, FaListOl, FaQuoteRight, FaParagraph } from "react-icons/fa6";
import { FaArrowRotateLeft, FaArrowRotateRight, FaYoutube } from "react-icons/fa6";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6, } from "react-icons/lu";
import { BiCodeBlock, BiLinkAlt } from "react-icons/bi";
import { BsFillFileEarmarkBreakFill } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { useCallback, useRef } from 'react';
import { IoLinkSharp, IoUnlinkSharp } from "react-icons/io5";

type Props = {
  editor: Editor | null,
}

const MenuBar = ({ editor }: Props) => {

  const addImage = useCallback(() => {
    const url = window.prompt('URL')
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL')
    if (url) {
      editor?.commands.setYoutubeVideo({
        src: url,
      })
    }
  }

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor?.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className="MenuBar">

      {/*Button-group"> */}
      <button
        type="button"
        title="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={`button-item ${editor.isActive('bold') ? "active" : "disactive"}`}
      >
        <FaBold />
      </button>
      <button
        type="button"
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={`button-item ${editor.isActive('italic') ? "active" : "disactive"}`}
      >
        <FaItalic />
      </button>
      <button
        type="button"
        title="Strike"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={`button-item ${editor.isActive('strike') ? "active" : "disactive"}`}
      >
        <FaStrikethrough />
      </button>
      <button
        type="button"
        title="Code"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={`button-item ${editor.isActive('code') ? "active" : "disactive"}`}
      >
        <FaCode />
      </button>
      <div className="divider"></div>
      {/* <button
        type="button"
        title="Heading 1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`button-item ${editor.isActive('heading', { level: 1 }) ? "active" : "disactive"}`}
      >
        <LuHeading1 size={21} />
      </button> */}
      <button
        type="button"
        title="Heading 2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`button-item ${editor.isActive('heading', { level: 2 }) ? "active" : "disactive"}`}
      >
        <LuHeading2 size={21} />
      </button>
      <button
        type="button"
        title="Heading 3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`button-item ${editor.isActive('heading', { level: 3 }) ? "active" : "disactive"}`}
      >
        <LuHeading3 size={21} />
      </button>
      {/* <button
        type="button"
        title="Heading 4"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`button-item ${editor.isActive('heading', { level: 4 }) ? "active" : "disactive"}`}
      >
        <LuHeading4 size={21} />
      </button>
      <button
        type="button"
        title="Heading 5"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`button-item ${editor.isActive('heading', { level: 5 }) ? "active" : "disactive"}`}
      >
        <LuHeading5 size={21} />
      </button>
      <button
        type="button"
        title="Heading 6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`button-item ${editor.isActive('heading', { level: 6 }) ? "active" : "disactive"}`}
      >
        <LuHeading6 size={21} />
      </button> */}

      <button
        type="button"
        title="Paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`button-item ${editor.isActive('paragraph') ? "active" : "disactive"}`}
      >
        <FaParagraph />
      </button>
      <button
        type="button"
        title="Urordered List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`button-item ${editor.isActive('bulletList') ? "active" : "disactive"}`}
      >
        <FaListUl />
      </button>
      <button
        type="button"
        title="Ordered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`button-item ${editor.isActive('orderedList') ? "active" : "disactive"}`}
      >
        <FaListOl />
      </button>
      <button
        type="button"
        title="Blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`button-item ${editor.isActive('blockquote') ? "active" : "disactive"}`}
      >
        <FaQuoteRight />
      </button>
      <button
        type="button"
        title="Code Block"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`button-item ${editor.isActive('codeBlock') ? "active" : "disactive"}`}
      >
        <BiCodeBlock />
      </button>

      <div className="divider"></div>
      {
        editor.isActive('link') ?
          <button
            type="button"
            title="Unlink"
            onClick={() => editor.chain().focus().unsetLink().run()}
            className={`button-item active`}
          >
            <IoUnlinkSharp />
          </button>
          :
          <button
            type="button"
            title="Link"
            onClick={setLink}
            className={`button-item`}
          >
            <IoLinkSharp />            
          </button>
      }


      <button
        type="button"
        title="Image"
        onClick={addImage}
        className={`button-item ${editor.isActive('image') ? "active" : "disactive"}`}
      >
        <FaImage />
      </button>

      <button
        type="button"
        title="Set YouTube video"
        onClick={addYoutubeVideo}
        className={`button-item ${"disactive"}`}
      >
        <FaYoutube />
      </button>

      <div className="divider"></div>

      <button
        type="button"
        title="Horizontal Rule"
        className={`button-item ${"disactive"}`}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <GoHorizontalRule />
      </button>

      <button
        type="button"
        title="Hard Break"
        className={`button-item ${"disactive"}`}
        onClick={() => editor.chain().focus().setHardBreak().run()}>
        <BsFillFileEarmarkBreakFill />
      </button>

      {/* <div className="divider"></div> */}
      <div className="absolute" style={{ top: "-40px", right: "0" }}>
        <button
          type="button"
          title="Undo"
          className={`button-item ${"disactive"}`}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <FaArrowRotateLeft />
        </button>
        <button
          type="button"
          title="Redo"
          className={`button-item ${"disactive"}`}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <FaArrowRotateRight />
        </button>
      </div>

    </div>
  )
}
export default MenuBar;

/* <div className="flex flex-wrap items-center pb-2">
  <div className="border-r border-primary h-12 w-px mx-4"></div>
</div>

<div className="flex flex-wrap items-center pb-2">
  <button
    type="button"
    className={`button-item ${"disactive"}`}
    onClick={() => editor.chain().focus().unsetAllMarks().run()}>
    clear marks
  </button>

  <button
    type="button"
    className={`button-item ${"disactive"}`}
    onClick={() => editor.chain().focus().clearNodes().run()}>
    clear nodes
  </button>
</div> */

/* <button
  type="button"
  onClick={() => editor.chain().focus().setColor('#958DF1').run()}
  className={`button-item ${editor.isActive('textStyle', { color: '#958DF1' }) ? "active" : "disactive"}`}
>
  purple
</button> */