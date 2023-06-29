import { Editor, EditorContent, useEditor } from '@tiptap/react'
import { FaBold, FaItalic, FaStrikethrough, FaCode } from "react-icons/fa6";
import { FaListUl, FaListOl, FaQuoteRight } from "react-icons/fa6";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6, } from "react-icons/lu";
import { BiCodeBlock } from "react-icons/bi";
import { BsFillFileEarmarkBreakFill } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";

type Props = {
  editor: Editor | null,
}

const MenuBar = ({ editor }: Props) => {
  if (!editor) {
    return null
  }

  const styles = "rounded-lg px-4 py-1 hover:bg-slate-200"
  const activeStyles = "bg-primary text-white"
  const disactiveStyles = "bg-white text-black"

  return (
    <div className="mb-4 p-4">
      <div className="flex flex-wrap pb-2">
        <div className="mr-4">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={`${styles} ${editor.isActive('bold') ? activeStyles : disactiveStyles}`}
          >
            <FaBold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={`${styles} ${editor.isActive('italic') ? activeStyles : disactiveStyles}`}
          >
            <FaItalic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={`${styles} ${editor.isActive('strike') ? activeStyles : disactiveStyles}`}
          >
            <FaStrikethrough />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            className={`${styles} ${editor.isActive('code') ? activeStyles : disactiveStyles}`}
          >
            <FaCode />
          </button>
        </div>

        <div className="mr-4">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`${styles} ${editor.isActive('heading', { level: 1 }) ? activeStyles : disactiveStyles}`}
          >
            <LuHeading1 size={21} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`${styles} ${editor.isActive('heading', { level: 2 }) ? activeStyles : disactiveStyles}`}
          >
            <LuHeading2 size={21} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`${styles} ${editor.isActive('heading', { level: 3 }) ? activeStyles : disactiveStyles}`}
          >
            <LuHeading3 size={21} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={`${styles} ${editor.isActive('heading', { level: 4 }) ? activeStyles : disactiveStyles}`}
          >
            <LuHeading4 size={21} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={`${styles} ${editor.isActive('heading', { level: 5 }) ? activeStyles : disactiveStyles}`}
          >
            <LuHeading5 size={21} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            className={`${styles} ${editor.isActive('heading', { level: 6 }) ? activeStyles : disactiveStyles}`}
          >
            <LuHeading6 size={21} />
          </button>
          <button
            className={`${styles} ${disactiveStyles}`}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <GoHorizontalRule />
          </button>
          <button
            className={`${styles} ${disactiveStyles}`}
            onClick={() => editor.chain().focus().setHardBreak().run()}>
            <BsFillFileEarmarkBreakFill />
          </button>
        </div>

        <div>
          <button
            className={`${styles} ${disactiveStyles}`}
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
            className={`${styles} ${disactiveStyles}`}
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

      <div className="pb-2">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${styles} ${editor.isActive('paragraph') ? activeStyles : disactiveStyles}`}
        >
          paragraph
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${styles} ${editor.isActive('bulletList') ? activeStyles : disactiveStyles}`}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${styles} ${editor.isActive('orderedList') ? activeStyles : disactiveStyles}`}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${styles} ${editor.isActive('blockquote') ? activeStyles : disactiveStyles}`}
        >
          <FaQuoteRight />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${styles} ${editor.isActive('codeBlock') ? activeStyles : disactiveStyles}`}
        >
          <BiCodeBlock />
        </button>
      </div>

      <div className="pb-2">
        <button
          className={`${styles} ${disactiveStyles}`}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          clear marks
        </button>

        <button
          className={`${styles} ${disactiveStyles}`}
          onClick={() => editor.chain().focus().clearNodes().run()}>
          clear nodes
        </button>
      </div>

      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={`${styles} ${editor.isActive('textStyle', { color: '#958DF1' }) ? activeStyles : disactiveStyles}`}
      >
        purple
      </button>
    </div>
  )
}
export default MenuBar;