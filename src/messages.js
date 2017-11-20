/* module improts */
//import handleAction from './actions'
//import { request } from 'recastai'
const handleAction = require('./actions').handleAction
const request = require('recastai').request

const req = new request(process.env.REQUEST_TOKEN, process.env.LANGUAGE)

async function replyMessage(message) {
	console.log('\n**********************************************************')
	try {
		console.log('MESSAGE RECEIVED', message)

		let text = message.content
		const { senderId } = message

		let payload = ''
		let replies = []
		if (message.type === 'payload') {
			text = message.content
		}
		const res = await req.converseText(text, { conversationToken: senderId })
		console.log('RECAST ANSWER', res)
		replies = await handleAction(res, payload)
		replies.forEach(reply => message.addReply(reply))

		await message.reply()
	} catch (err) {
		console.error('An error occured while handling message', err)
	}
	console.log('**********************************************************\n')
}

module.exports = replyMessage
