// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"
import ScrollReveal from 'stimulus-scroll-reveal'
application.register('scroll-reveal', ScrollReveal)

import ChatroomSubscriptionController from "./chatroom_subscription_controller"
application.register("chatroom-subscription", ChatroomSubscriptionController)

import FlatpickrController from "./flatpickr_controller"
application.register("flatpickr", FlatpickrController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import InsertCodeController from "./insert_code_controller"
application.register("insert-code", InsertCodeController)

import NotificationsController from "./notifications_controller"
application.register("notifications", NotificationsController)


import OpenModalController from "./open_modal_controller"
application.register("open-modal", OpenModalController)

import RangeInputController from "./range_input_controller"
application.register("range-input", RangeInputController)



import TabController from "./tab_controller"
application.register("tab", TabController)

import WithdrawController from "./withdraw_controller"
application.register("withdraw", WithdrawController)
