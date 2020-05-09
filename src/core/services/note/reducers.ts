import { handleActions } from "redux-actions";
import { NoteState } from "./index";
import { updateCurrentNote as loginStartAction } from "./actions";

const updateCurrentNote = loginStartAction.toString();

const placeHolder = `
# H1
## H2
### H3
#### H4
##### H5
###### H6

horizontal line:
------  
## Text Styling:
*This text will be italic* \n
_This will also be italic_ \n
**This text will be bold** \n
__This will also be bold__ \n
*You **can** combine them* \n


## Here's a table:
| Head | Head | Head | Head |
| --- | --- | --- | --- |
| Data | Data | Data | Data |
| Data | Data | Data | Data |
| Data | Data | Data | Data |

## Un-ordered list:
* Item 1
* Item 2
  * Item 2a
  * Item 2b
  * 
## ordered list:
1. Item 1
2. Item 2
3. Item 3
  * Item 3a
  * Item 3b
  * 


## QUOTE BLOCKS
  As Grace Hopper said:
  > I’ve always been more interested
  > in the future than in the past.

## Images
Example: ![Spotify Logo](https://logo.clearbit.com/spotify.com) \n

## Links
http://github.com - automatic! \n
[GitHub](http://github.com)

## Special Characters
\\* literal asterisks \\* \n
\\#literal hashtags\\# \n


`;

const defaultState: NoteState = {
  currentNote: placeHolder,
  notes: [],
  status: 2,
};

const handlers = {
  [updateCurrentNote]: (state: any, action: any) => ({
    ...state,
    currentNote: action.payload,
  }),
};

const reducer = handleActions<NoteState, string>(handlers, defaultState);
export default reducer;
