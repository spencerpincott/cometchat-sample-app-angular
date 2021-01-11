import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatReceiverFileMessageBubbleComponent } from "./cometchat-receiver-file-message-bubble/cometchat-receiver-file-message-bubble.component";
import { CometchatReadRecieptModule } from "../cometchat-read-reciept/cometchat-read-reciept.module";
import { CometchatMessageActionsModule } from "../cometchat-message-actions/cometchat-message-actions.module";
import { CometchatAvatarModule } from "../../Shared/cometchat-avatar/cometchat-avatar.module";
import { CometchatThreadedMessageReplyCountModule } from "../cometchat-threaded-message-reply-count/cometchat-threaded-message-reply-count.module";
import { CometchatMessageReactionsModule } from "../Extensions/cometchat-message-reactions/cometchat-message-reactions.module";

@NgModule({
  declarations: [CometchatReceiverFileMessageBubbleComponent],
  imports: [
    CommonModule,
    CometchatMessageActionsModule,
    CometchatAvatarModule,
    CometchatReadRecieptModule,
    CometchatThreadedMessageReplyCountModule,
    CometchatMessageReactionsModule,
  ],
  exports: [CometchatReceiverFileMessageBubbleComponent],
})
export class CometchatReceiverFileMessageBubbleModule {}
