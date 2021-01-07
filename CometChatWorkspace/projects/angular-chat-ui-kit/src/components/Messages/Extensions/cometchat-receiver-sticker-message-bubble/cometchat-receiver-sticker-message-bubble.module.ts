import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatReceiverStickerMessageBubbleComponent } from "./cometchat-receiver-sticker-message-bubble/cometchat-receiver-sticker-message-bubble.component";
import { CometchatToolTipModule } from "../../cometchat-tool-tip/cometchat-tool-tip.module";
import { CometchatThreadedMessageReplyCountModule } from "../../cometchat-threaded-message-reply-count/cometchat-threaded-message-reply-count.module";
import { CometchatAvatarModule } from "../../../Shared/cometchat-avatar/cometchat-avatar.module";
import { CometchatReadRecieptModule } from "../../cometchat-read-reciept/cometchat-read-reciept.module";
import { CometchatMessageReactionsModule } from "../cometchat-message-reactions/cometchat-message-reactions.module";

@NgModule({
  declarations: [CometchatReceiverStickerMessageBubbleComponent],
  imports: [
    CommonModule,
    CometchatToolTipModule,
    CometchatThreadedMessageReplyCountModule,
    CometchatAvatarModule,
    CometchatThreadedMessageReplyCountModule,
    CometchatReadRecieptModule,
    CometchatMessageReactionsModule,
  ],
  exports: [CometchatReceiverStickerMessageBubbleComponent],
})
export class CometchatReceiverStickerMessageBubbleModule {}
