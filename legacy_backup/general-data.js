/* GrammarSpace — General Grammar data (UTF-8).
 * Load this file AFTER the main application script. No HTML file is changed here.
 * One lesson, two theory pages, forty questions: 15 gap-fill / 15 MCQ / 10 unscramble.
 * rawText uses question? option | **correct** | option for MCQs.
 * exerciseFeedback contains one detailed Vietnamese explanation per question,
 * including word-order questions (the original TXT syntax has no feedback slot).
 * The non-enumerable parts getter adapts this data to the existing library reader:
 * it reorders MCQ markup for parseTXT and attaches all forty feedback strings.
 * Rule references (all teaching text and questions below are original):
 * https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/verbs-followed-ing-or-infinitive-change-meaning
 * https://dictionary.cambridge.org/grammar/british-grammar/stop-ing-form-or-to-
 */
(function (root) {
  'use strict';
  const generalLessons = [
    {
      id: 'verb-patterns-03-stop-remember-forget',
      group: 'Group 2: Dạng thức Động từ',
      title: "V-ing và To-V (Phần 3): Các động từ thay đổi nghĩa (Stop, Remember, Forget)",
      rawText: `# V-ing và To-V (Phần 3): Các động từ thay đổi nghĩa (Stop, Remember, Forget)
[color:#477fa4]TRANG 1/2 · STOP & REMEMBER · khoảng 8 phút[/color]
**Mục tiêu:** Nhìn vào ý nghĩa để chọn V-ing hoặc to + động từ nguyên mẫu. Sau 15 phút lý thuyết, bạn sẽ phân biệt được ==dừng việc đang làm==, ==dừng để làm việc khác==, ==nhớ một kỷ niệm== và ==nhớ/quên một việc cần làm==. Thời gian làm 40 câu luyện tập được tính riêng.

[color:#92703d]Một thay đổi nhỏ, hai câu chuyện khác nhau[/color]
Minh đang chạy xe. Minh dừng xe rồi uống nước: **Minh stopped to drink some water.**
Minh đang uống nước. Khi nghe gọi, Minh thôi uống: **Minh stopped drinking.**
Cả hai đều có stopped, nhưng hành động sau nó giữ vai trò khác nhau. Đừng chọn chỉ vì thấy một “động từ quen thuộc”; hãy hỏi ==việc nào đang dừng, việc nào sắp được làm?==

[color:#a45e57]1. STOP + V-ing = dừng chính việc được nói đến[/color]
Hình dung nút DỪNG đang đặt lên một đoạn phim: đang làm V → dừng V.
**The students stopped chatting when the teacher arrived.** → Các bạn đang trò chuyện và ngừng việc trò chuyện ấy.
**My sister stopped drinking coffee last month.** → Chị tôi đã ngừng thói quen uống cà phê.
Stop + V-ing có thể nói về một hành động tức thời hoặc một thói quen; không tự động có nghĩa là bỏ hẳn mãi mãi. Bối cảnh quyết định thời gian dừng.
Mẹo: Nếu diễn đạt được bằng “ngừng việc ...”, chọn ==stop + V-ing==. Stop talking = ngừng nói; stop to talk không mang nghĩa đó.

[color:#4f8661]2. STOP + to-V = dừng một việc để làm việc khác[/color]
Hình dung một điểm dừng trên đường: đang làm A → dừng A → làm B. Trong **stop to do B**, to-V chỉ mục đích của việc dừng.
**We stopped to check the map.** → Chúng tôi đang đi, dừng lại để xem bản đồ. Việc bị tạm dừng là đi tiếp; việc mới muốn làm là xem bản đồ.
**He stopped to answer the phone.** → Anh ấy tạm dừng công việc đang làm để nghe điện thoại.
So sánh: **He stopped answering the phone.** → Anh ấy ngừng nghe/trả lời điện thoại. Cùng answer nhưng câu chuyện đã đổi!
Không phải cứ có stopped là động từ sau nó thêm -ing. Hãy xác định ==to-V là mục đích của điểm dừng==.

[color:#477fa4]3. REMEMBER + V-ing = có ký ức về việc đã xảy ra[/color]
Hình dung một bức ảnh trong đầu: việc đã xảy ra → sau đó còn nhớ việc ấy.
**I remember meeting Hoa at the school gate.** → Tôi nhớ lần đã gặp Hoa ở cổng trường; cuộc gặp có trước việc nhớ lại.
**She remembers turning off the oven.** → Cô ấy nhớ mình đã tắt lò; đây là ký ức về hành động đã thực hiện.
Câu hỏi kiểm tra: “Tôi có đang kể lại một cảnh trong trí nhớ không?” Nếu có, chọn ==remember + V-ing==. Trong bài này, dùng dạng V-ing đơn, không dùng having + V3.

[color:#4f8661]4. REMEMBER + to-V = nhớ thực hiện một việc cần làm[/color]
Hình dung tờ giấy nhắc việc: nhớ nhiệm vụ → thực hiện nhiệm vụ.
**Remember to bring your notebook tomorrow.** → Hãy nhớ mang vở ngày mai. Đây là lời nhắc, không phải ký ức đã mang vở.
**Mai remembered to attach the file before sending the email.** → Mai đã nhớ đính kèm file và làm việc đó, thay vì quên nhiệm vụ.
Chú ý: “to-V” không đồng nghĩa với “thì tương lai”. **remembered to do** có thể kể về một nhiệm vụ đã nhớ làm trong quá khứ; ta xét quan hệ giữa việc nhớ và việc làm.

[color:#92703d]Cặp đối chiếu đáng nhớ[/color]
**I remember locking the door.** = Tôi có ký ức mình đã khóa cửa.
**I remembered to lock the door.** = Tôi đã nhớ làm việc cần làm là khóa cửa.
Cả hai đều có thể nói về một cánh cửa đã được khóa. Khác biệt nằm ở góc nhìn: ==ký ức== hay ==hoàn thành việc phải nhớ==. Đừng suy rằng remember + V-ing luôn có nghĩa là chưa làm!

[color:#477fa4]Cách làm phần luyện tập[/color]
Điền đúng dạng V-ing hoặc to + V của động từ trong ngoặc; không thêm chủ ngữ, không dùng dạng viết tắt hay having + V3. Ở câu trắc nghiệm, chọn theo bối cảnh. Ở câu xếp từ, dùng tất cả thẻ, giữ nguyên chữ hoa và dấu câu. Phần phản hồi giải thích lý do sau khi bạn đã thử trả lời.

=== EXERCISES ===
1. The students stopped {{talking::Đáp án talking: học sinh đang nói rồi ngừng chính việc nói, nên dùng stop + V-ing. Kết quả căn phòng yên lặng xác nhận hành động nói đã dừng. Stopped to talk lại là dừng việc khác để bắt đầu nói.}} when the teacher began the lesson. The room became quiet. (talk)
2. We were cycling and felt thirsty, so we stopped {{to drink::Đáp án to drink: nhóm đang đạp xe rồi tạm dừng để uống nước. Uống là mục đích của điểm dừng, nên dùng stop + to-V. Stopped drinking sẽ có nghĩa ngừng uống, không đúng câu chuyện này.}} some water before continuing. (drink)
3. At ten o’clock, Nam stopped {{playing::Đáp án playing: Nam chấm dứt việc đang chơi đàn để hàng xóm ngủ. Stop + V-ing đặt hành động chơi đàn vào vị trí việc bị ngừng; stop to play lại diễn tả dừng một hoạt động khác để chơi đàn.}} the piano because his neighbours wanted to sleep. (play)
4. The hikers were unsure which path to take. They stopped {{to check::Đáp án to check: người đi bộ dừng hành trình nhằm xem bản đồ. To check chỉ mục đích mới sau khi dừng, nên dùng stop + to-V. Checking sẽ nói rằng họ ngừng xem bản đồ.}} the map. (check)
5. I remember {{meeting::Đáp án meeting: chiếc cặp đỏ là chi tiết trong ký ức về cuộc gặp đã xảy ra. Remember + V-ing diễn tả nhớ lại việc trước đó. To meet sẽ nói về việc cần nhớ thực hiện, không phải hồi ức.}} Lan on our first day at primary school. I can still picture her red schoolbag. (meet)
6. Please remember {{to bring::Đáp án to bring: đây là lời nhắc về nhiệm vụ mang vở vào ngày mai. Ta nhớ nhiệm vụ trước rồi thực hiện, nên dùng remember + to-V. Bringing sẽ hướng tới ký ức đã mang vở.}} your notebook tomorrow; we will use it in class. (bring)
7. I remember {{locking::Đáp án locking: người nói còn hình dung được cảnh xoay chìa khóa, tức nhớ một hành động đã làm. Dùng remember + V-ing để nói về ký ức, không phải lời nhắc phải khóa cửa.}} the door yesterday. I can still picture turning the key. (lock)
8. Before she sent the email, Mai remembered {{to attach::Đáp án to attach: Mai đã nhớ thực hiện nhiệm vụ đính kèm báo cáo trước khi gửi thư. Remembered + to-V cho biết cô không bỏ sót việc cần làm. Attaching sẽ chỉ việc nhớ lại một lần đính kèm đã xảy ra.}} the report, so the recipient received it with the message. (attach)
9. (( “Tuan stopped eating sweets because of his teeth.” What did Tuan do? He paused another activity so that he could eat sweets. | **He gave up the activity of eating sweets.** | He reminded himself to buy sweets. :: Đáp án là He gave up the activity of eating sweets. Stop eating nói về ngừng chính việc ăn kẹo. Nếu Tuan dừng việc khác để ăn kẹo, câu phải là stopped to eat sweets. Câu không nói về một lời nhắc mua kẹo. ))
10. (( We were walking past a lake and wanted a photo. We stopped ___ a picture. Which form fits? taking | **to take** | take :: Đáp án to take: chụp ảnh là mục đích khiến chúng tôi dừng đi bộ. Stop + to-V diễn tả dừng để làm việc mới. Taking là ngừng chụp ảnh; take đứng trần không tạo cấu trúc đúng ở đây. ))
11. (( I can picture putting food in the cat’s bowl this morning. I remember ___ the cat. Which form fits? to feed | **feeding** | feed :: Đáp án feeding: người nói đang hồi tưởng cảnh cho mèo ăn đã xảy ra sáng nay. Remember + V-ing nói về ký ức. To feed phù hợp khi nhớ một nhiệm vụ cần làm, còn feed thiếu dạng theo sau remember. ))
12. (( Your trip starts tomorrow and your phone battery is low. Remember ___ it tonight. Which form fits? charging | **to charge** | charged :: Đáp án to charge: đây là lời nhắc sạc điện thoại tối nay để chuẩn bị chuyến đi. Dùng remember + to-V cho nhiệm vụ. Charging nói về nhớ lại việc đã sạc; charged không phù hợp cấu trúc này. ))
13. (( “Yesterday, she remembered to call the client before leaving.” What does this normally mean? She only recalled an earlier call, without making the needed call. | **She did not forget the task and made the call.** | She stopped calling the client permanently. :: Đáp án là She did not forget the task and made the call. Remembered to call kể về một nhiệm vụ mà cô đã nhớ làm. Remembered calling mới nhấn mạnh hồi tưởng cuộc gọi; câu không có ý ngừng gọi mãi mãi. ))
14. (( Which sentence describes a vivid memory of fireworks seen last summer? I remember to see the fireworks last summer. | **I remember seeing the fireworks last summer.** | I remember see the fireworks last summer. :: Đáp án I remember seeing the fireworks last summer. Người nói có ký ức về trải nghiệm đã xảy ra, nên dùng remember + seeing. To see diễn tả nhiệm vụ cần nhớ làm, còn see đứng trần không phù hợp sau remember. ))
15. (( “During the long shift, he stopped to smoke.” Which meaning is correct? He gave up smoking at that moment. | **He paused his work so that he could smoke.** | He forgot that he had already smoked. :: Đáp án là He paused his work so that he could smoke. To smoke chỉ mục đích của việc tạm dừng ca làm. Nếu muốn nói ngừng hút thuốc, ta dùng stopped smoking; câu cũng không nói về việc quên một ký ức. ))
16. ~~ She | stopped | biting | her | nails. ~~
17. ~~ We | stopped | to | buy | some | water. ~~
18. ~~ I | remember | meeting | your | brother. ~~
19. ~~ Please | remember | to | close | the | windows. ~~
20. ~~ He | remembered | to | bring | his | passport. ~~

--- PAGE BREAK ---

# Quên một nhiệm vụ hay quên một ký ức?
[color:#477fa4]TRANG 2/2 · FORGET & BẢN ĐỒ Ý NGHĨA · khoảng 7 phút[/color]
**Mục tiêu:** Phân biệt một việc bị bỏ sót với một việc đã xảy ra nhưng không còn được nhớ. Sau đó kết nối cả ba động từ stop, remember và forget.

[color:#a45e57]5. FORGET + to-V = quên thực hiện một việc cần làm[/color]
Hình dung một ô chưa được đánh dấu trong danh sách việc cần làm: có nhiệm vụ → quên → nhiệm vụ không được làm vào lúc cần làm.
**I forgot to charge my phone last night.** → Tối qua tôi quên sạc điện thoại. Tôi không thực hiện việc sạc vào thời điểm cần thực hiện.
**She forgot to bring her ticket, so she could not enter.** → Cô ấy quên mang vé nên không vào được.
Người đó vẫn có thể làm bù về sau. “Forgot to do” mô tả việc bị bỏ sót trong tình huống đang nói, không khẳng định rằng họ sẽ không bao giờ làm việc đó.
**Don't forget to sign the form.** → Đừng quên ký đơn. Đây là lời nhắc trước khi làm, nên dùng ==to sign==. Phủ định don't forget không biến câu thành ký ức.

[color:#4f8661]6. FORGET + V-ing = không còn nhớ một việc đã xảy ra[/color]
Hình dung một bức ảnh đã mờ: việc xảy ra → ký ức về việc ấy bị quên.
**I had forgotten meeting her until she showed me our old photograph.** → Tôi đã quên lần từng gặp cô ấy, cho đến khi cô ấy đưa ảnh cũ. Cuộc gặp thật sự đã xảy ra; vấn đề là ký ức.
**He had forgotten lending me the book.** → Anh ấy đã quên việc từng cho tôi mượn sách. Khác với **He forgot to lend me the book**: anh ấy quên làm việc cho mượn sách vào lúc cần làm.
Trong giao tiếp, người nói cũng thường dùng **forgot that + mệnh đề** để diễn đạt ký ức bị quên. Bài này luyện cấu trúc V-ing nên đáp án đi theo dạng đó.

[color:#92703d]7. NEVER FORGET + V-ing = sẽ luôn nhớ trải nghiệm[/color]
**I will never forget seeing snow for the first time.** → Tôi sẽ không bao giờ quên trải nghiệm lần đầu nhìn thấy tuyết.
Seeing nói về trải nghiệm đã có; will never forget nói về việc ký ức ấy còn mãi trong tương lai. Vì vậy, thấy **will** không có nghĩa là chọn to see!
So sánh: **I never forget to charge my phone.** → Tôi không bao giờ quên nhiệm vụ sạc điện thoại. Đây là thói quen nhớ làm việc cần làm, nên dùng ==to charge==.
Đừng dùng từ never như một “mẹo chọn -ing” tuyệt đối. Hãy hỏi: ==trải nghiệm đáng nhớ hay nhiệm vụ phải làm?==

[color:#477fa4]8. Bản đồ sáu cấu trúc[/color]
**stop doing** → ngừng chính việc doing.
**stop to do** → tạm dừng việc khác để làm do.
**remember doing** → nhớ việc đã xảy ra.
**remember to do** → nhớ thực hiện việc cần làm.
**forget doing** → quên ký ức về việc đã xảy ra.
**forget to do** → quên thực hiện việc cần làm.
Mẹo hình ảnh: [color:#a45e57]STOP = nút dừng[/color]; [color:#477fa4]V-ing với remember/forget = album ký ức[/color]; [color:#4f8661]to-V với remember/forget = danh sách nhiệm vụ[/color].

[color:#92703d]9. Đọc bằng chứng, không đoán theo một từ[/color]
“The door was still unlocked” là bằng chứng nhiệm vụ khóa cửa chưa được làm → forgot to lock.
“I can still picture the key turning” là bằng chứng có ký ức về hành động khóa cửa → remember locking.
“We were driving and felt thirsty” gợi bối cảnh tạm dừng việc lái xe để uống → stopped to drink.
“The room became quiet” gợi việc nói chuyện chấm dứt → stopped talking.
Các dấu hiệu ấy giúp hiểu câu chuyện; chúng không thay thế việc đọc cả câu. Một từ như yesterday hoặc tomorrow không tự quyết định cấu trúc.

[color:#a45e57]10. Ba lỗi cần tránh[/color]
**Lỗi 1:** Dịch mọi stopped to-V thành “ngừng V”. Sửa: to-V là việc làm với mục đích mới, không phải việc bị ngừng.
**Lỗi 2:** Nghĩ remember doing nghĩa là “nhớ để làm”. Sửa: doing là việc có trước ký ức; muốn nhắc nhiệm vụ, dùng remember to do.
**Lỗi 3:** Nghĩ forgot doing nghĩa là “chưa làm”. Sửa: với ký ức, việc đã xảy ra; với forgot to do, việc bị bỏ sót vào lúc cần thực hiện.

[color:#4f8661]Tự kiểm tra trước khi chọn[/color]
Bước 1: Xác định động từ chính là stop, remember hay forget.
Bước 2: Với stop, hỏi “ngừng chính việc này, hay dừng để làm việc này?”. Với remember/forget, hỏi “đang nói về ký ức, hay nhiệm vụ?”.
Bước 3: Đọc lại cả câu sau khi điền để bảo đảm phù hợp kết quả và bối cảnh. Bạn đang chọn ==ý nghĩa trước, hình thức sau==.

=== EXERCISES ===
21. I forgot {{to buy::Đáp án to buy: việc mua sữa cần làm đã bị bỏ sót, nên không có sữa cho bữa sáng. Forget + to-V diễn tả quên thực hiện nhiệm vụ. Forget buying sẽ nói về quên ký ức của một lần đã mua.}} milk on my way home, so there was none for breakfast. (buy)
22. I will never forget {{seeing::Đáp án seeing: lần đầu nhìn thấy tuyết đã xảy ra vào năm ngoái và trở thành trải nghiệm đáng nhớ. Never forget + V-ing ở đây nói về giữ mãi ký ức. Will thuộc việc nhớ trong tương lai, không khiến seeing đổi thành to see.}} snow for the first time during our holiday last year. (see)
23. He forgot {{to set::Đáp án to set: đặt báo thức là nhiệm vụ bị quên trước khi ngủ. Kết quả báo thức không reo cho thấy việc ấy chưa được làm vào lúc cần làm. Forget setting sẽ nói về đã đặt rồi nhưng quên ký ức đó.}} his alarm before bed, so it did not ring the next morning. (set)
24. My grandmother will never forget {{holding::Đáp án holding: bà nhớ một trải nghiệm đã có là lần đầu bế cháu. Never forget + V-ing nhấn mạnh ký ức không phai. To hold sẽ hướng tới nhiệm vụ phải nhớ thực hiện, không phù hợp ý nghĩa trải nghiệm này.}} her first grandchild for the first time. (hold)
25. I had forgotten {{meeting::Đáp án meeting: bức ảnh chứng minh hai người đã gặp nhau; điều bị quên là ký ức về cuộc gặp. Dùng forget + V-ing. Forgotten to meet sẽ có nghĩa bỏ sót một cuộc gặp cần thực hiện, không đúng bối cảnh ảnh chụp chung.}} her until she showed me a photograph of us together at university. (meet)
26. Do not forget {{to sign::Đáp án to sign: đây là lời nhắc hoàn thành nhiệm vụ ký đơn đang còn để trống. Do not forget + to-V có nghĩa đừng bỏ sót việc cần làm. Signing sẽ nói về ký ức của việc ký đã xảy ra.}} the application before you submit it; it is still unsigned. (sign)
27. My father still remembers {{hearing::Đáp án hearing: bố đang nhớ lại thời điểm đã nghe tin, thể hiện qua khả năng kể rõ mình ở đâu. Remember + V-ing diễn tả ký ức. To hear không diễn đạt việc hồi tưởng trải nghiệm này.}} the news of my birth. He can describe exactly where he was. (hear)
28. (( He forgot to lock the garage before going out. In this situation, what was the problem? He locked it but lost the memory of doing so. | **He left without carrying out the locking task.** | He stopped another activity in order to lock it. :: Đáp án là He left without carrying out the locking task. Forgot to lock nói về quên làm nhiệm vụ khóa cửa trước khi ra ngoài. Nếu đã khóa nhưng quên ký ức, cấu trúc phù hợp là forgot locking hoặc forgot that he had locked it. ))
29. (( She won her first trophy yesterday. “I will never forget ___ it,” she says. Which form fits? to win | **winning** | win :: Đáp án winning: chiến thắng đã xảy ra và cô sẽ luôn nhớ trải nghiệm ấy. Dùng never forget + V-ing cho ký ức. To win diễn tả một việc cần nhớ làm; win đứng trần không phù hợp sau forget trong câu này. ))
30. (( The cooker is still on. Before you leave, remember ___ it off. Which form fits? turning | **to turn** | turned :: Đáp án to turn: bếp vẫn đang bật, nên tắt bếp là nhiệm vụ cần nhớ thực hiện. Remember + to-V dùng cho lời nhắc. Turning sẽ nói về ký ức đã tắt bếp, trái với bối cảnh hiện tại. ))
31. (( The guide showed us a photo from our previous trip. I had forgotten ___ him before. Which form fits? to meet | **meeting** | meet :: Đáp án meeting: chuyến đi trước và bức ảnh cho thấy cuộc gặp đã xảy ra; người nói chỉ quên ký ức ấy. Dùng forget + V-ing. To meet lại nói về việc quên thực hiện một cuộc gặp cần làm. ))
32. (( Linh was halfway through her novel. When the phone rang, she stopped ___ and answered it. Which form fits? to read | **reading** | read :: Đáp án reading: Linh đang đọc tiểu thuyết rồi ngừng chính việc đọc để nghe điện thoại. Stop + V-ing diễn tả hành động bị dừng. Stopped to read sẽ nói cô dừng việc khác để đọc, ngược bối cảnh. ))
33. (( We were discussing the budget, but everyone was hungry. We stopped ___ lunch. Which form fits? having | **to have** | have :: Đáp án to have: nhóm tạm dừng thảo luận để ăn trưa. To have lunch là mục đích của việc dừng. Having lunch sẽ nói về ngừng ăn trưa, trong khi lúc đầu nhóm đang thảo luận. ))
34. (( “I remember posting the letter; I can picture the blue postbox.” What is the speaker describing? A task that has not yet been done. | **A memory of an action already performed.** | A pause made in order to write a letter. :: Đáp án là A memory of an action already performed. Remember posting và hình ảnh hòm thư cho thấy người nói nhớ việc đã gửi thư. Remember to post mới là nhớ thực hiện nhiệm vụ gửi; câu không nói về việc viết thư. ))
35. (( The dog was hungry because Sam forgot ___ it that morning. The food was still in the unopened bag. Which form fits? feeding | **to feed** | feed :: Đáp án to feed: túi thức ăn chưa mở và con chó còn đói cho thấy nhiệm vụ cho ăn bị bỏ sót. Forget + to-V diễn tả quên làm. Feeding sẽ nói về ký ức của việc cho ăn đã xảy ra, không phù hợp bằng chứng. ))
36. ~~ I | forgot | to | charge | my | phone. ~~
37. ~~ She | will | never | forget | winning | the | race. ~~
38. ~~ Please | do | not | forget | to | lock | the | door. ~~
39. ~~ He | had | forgotten | meeting | our | teacher. ~~
40. ~~ They | stopped | to | ask | for | directions. ~~
`,
      // Position 0 is question 1; position 39 is question 40.
      exerciseFeedback: [
        "Đáp án talking: học sinh đang nói rồi ngừng chính việc nói, nên dùng stop + V-ing. Kết quả căn phòng yên lặng xác nhận hành động nói đã dừng. Stopped to talk lại là dừng việc khác để bắt đầu nói.",
        "Đáp án to drink: nhóm đang đạp xe rồi tạm dừng để uống nước. Uống là mục đích của điểm dừng, nên dùng stop + to-V. Stopped drinking sẽ có nghĩa ngừng uống, không đúng câu chuyện này.",
        "Đáp án playing: Nam chấm dứt việc đang chơi đàn để hàng xóm ngủ. Stop + V-ing đặt hành động chơi đàn vào vị trí việc bị ngừng; stop to play lại diễn tả dừng một hoạt động khác để chơi đàn.",
        "Đáp án to check: người đi bộ dừng hành trình nhằm xem bản đồ. To check chỉ mục đích mới sau khi dừng, nên dùng stop + to-V. Checking sẽ nói rằng họ ngừng xem bản đồ.",
        "Đáp án meeting: chiếc cặp đỏ là chi tiết trong ký ức về cuộc gặp đã xảy ra. Remember + V-ing diễn tả nhớ lại việc trước đó. To meet sẽ nói về việc cần nhớ thực hiện, không phải hồi ức.",
        "Đáp án to bring: đây là lời nhắc về nhiệm vụ mang vở vào ngày mai. Ta nhớ nhiệm vụ trước rồi thực hiện, nên dùng remember + to-V. Bringing sẽ hướng tới ký ức đã mang vở.",
        "Đáp án locking: người nói còn hình dung được cảnh xoay chìa khóa, tức nhớ một hành động đã làm. Dùng remember + V-ing để nói về ký ức, không phải lời nhắc phải khóa cửa.",
        "Đáp án to attach: Mai đã nhớ thực hiện nhiệm vụ đính kèm báo cáo trước khi gửi thư. Remembered + to-V cho biết cô không bỏ sót việc cần làm. Attaching sẽ chỉ việc nhớ lại một lần đính kèm đã xảy ra.",
        "Đáp án là He gave up the activity of eating sweets. Stop eating nói về ngừng chính việc ăn kẹo. Nếu Tuan dừng việc khác để ăn kẹo, câu phải là stopped to eat sweets. Câu không nói về một lời nhắc mua kẹo.",
        "Đáp án to take: chụp ảnh là mục đích khiến chúng tôi dừng đi bộ. Stop + to-V diễn tả dừng để làm việc mới. Taking là ngừng chụp ảnh; take đứng trần không tạo cấu trúc đúng ở đây.",
        "Đáp án feeding: người nói đang hồi tưởng cảnh cho mèo ăn đã xảy ra sáng nay. Remember + V-ing nói về ký ức. To feed phù hợp khi nhớ một nhiệm vụ cần làm, còn feed thiếu dạng theo sau remember.",
        "Đáp án to charge: đây là lời nhắc sạc điện thoại tối nay để chuẩn bị chuyến đi. Dùng remember + to-V cho nhiệm vụ. Charging nói về nhớ lại việc đã sạc; charged không phù hợp cấu trúc này.",
        "Đáp án là She did not forget the task and made the call. Remembered to call kể về một nhiệm vụ mà cô đã nhớ làm. Remembered calling mới nhấn mạnh hồi tưởng cuộc gọi; câu không có ý ngừng gọi mãi mãi.",
        "Đáp án I remember seeing the fireworks last summer. Người nói có ký ức về trải nghiệm đã xảy ra, nên dùng remember + seeing. To see diễn tả nhiệm vụ cần nhớ làm, còn see đứng trần không phù hợp sau remember.",
        "Đáp án là He paused his work so that he could smoke. To smoke chỉ mục đích của việc tạm dừng ca làm. Nếu muốn nói ngừng hút thuốc, ta dùng stopped smoking; câu cũng không nói về việc quên một ký ức.",
        "Câu đúng: She stopped biting her nails. Chủ ngữ She đứng trước stopped; biting đi sau stop vì chính thói quen cắn móng tay bị chấm dứt. Her nails là tân ngữ của biting. To bite sẽ đổi nghĩa thành dừng việc khác để cắn móng tay.",
        "Câu đúng: We stopped to buy some water. Sau chủ ngữ và stopped là to buy, nêu mục đích dừng lại để mua nước. Some water đứng sau buy làm tân ngữ. Nếu dùng buying, ý sẽ là ngừng việc mua, khác với câu cần tạo.",
        "Câu đúng: I remember meeting your brother. I là người nhớ, remember là động từ chính và meeting your brother là cuộc gặp đã xảy ra. Vì đang nói về ký ức, meeting theo sau remember, không phải nhiệm vụ to meet.",
        "Câu đúng: Please remember to close the windows. Please mở đầu lời nhắc lịch sự; remember to close yêu cầu nhớ đóng cửa sổ. To đứng trước động từ nguyên mẫu close, còn the windows là vật cần đóng. Đây là nhiệm vụ, không phải ký ức.",
        "Câu đúng: He remembered to bring his passport. Remembered to bring diễn tả anh ấy đã nhớ thực hiện việc mang hộ chiếu. Sau to là bring nguyên mẫu; his passport là tân ngữ. Bringing sẽ chuyển trọng tâm sang ký ức đã mang hộ chiếu.",
        "Đáp án to buy: việc mua sữa cần làm đã bị bỏ sót, nên không có sữa cho bữa sáng. Forget + to-V diễn tả quên thực hiện nhiệm vụ. Forget buying sẽ nói về quên ký ức của một lần đã mua.",
        "Đáp án seeing: lần đầu nhìn thấy tuyết đã xảy ra vào năm ngoái và trở thành trải nghiệm đáng nhớ. Never forget + V-ing ở đây nói về giữ mãi ký ức. Will thuộc việc nhớ trong tương lai, không khiến seeing đổi thành to see.",
        "Đáp án to set: đặt báo thức là nhiệm vụ bị quên trước khi ngủ. Kết quả báo thức không reo cho thấy việc ấy chưa được làm vào lúc cần làm. Forget setting sẽ nói về đã đặt rồi nhưng quên ký ức đó.",
        "Đáp án holding: bà nhớ một trải nghiệm đã có là lần đầu bế cháu. Never forget + V-ing nhấn mạnh ký ức không phai. To hold sẽ hướng tới nhiệm vụ phải nhớ thực hiện, không phù hợp ý nghĩa trải nghiệm này.",
        "Đáp án meeting: bức ảnh chứng minh hai người đã gặp nhau; điều bị quên là ký ức về cuộc gặp. Dùng forget + V-ing. Forgotten to meet sẽ có nghĩa bỏ sót một cuộc gặp cần thực hiện, không đúng bối cảnh ảnh chụp chung.",
        "Đáp án to sign: đây là lời nhắc hoàn thành nhiệm vụ ký đơn đang còn để trống. Do not forget + to-V có nghĩa đừng bỏ sót việc cần làm. Signing sẽ nói về ký ức của việc ký đã xảy ra.",
        "Đáp án hearing: bố đang nhớ lại thời điểm đã nghe tin, thể hiện qua khả năng kể rõ mình ở đâu. Remember + V-ing diễn tả ký ức. To hear không diễn đạt việc hồi tưởng trải nghiệm này.",
        "Đáp án là He left without carrying out the locking task. Forgot to lock nói về quên làm nhiệm vụ khóa cửa trước khi ra ngoài. Nếu đã khóa nhưng quên ký ức, cấu trúc phù hợp là forgot locking hoặc forgot that he had locked it.",
        "Đáp án winning: chiến thắng đã xảy ra và cô sẽ luôn nhớ trải nghiệm ấy. Dùng never forget + V-ing cho ký ức. To win diễn tả một việc cần nhớ làm; win đứng trần không phù hợp sau forget trong câu này.",
        "Đáp án to turn: bếp vẫn đang bật, nên tắt bếp là nhiệm vụ cần nhớ thực hiện. Remember + to-V dùng cho lời nhắc. Turning sẽ nói về ký ức đã tắt bếp, trái với bối cảnh hiện tại.",
        "Đáp án meeting: chuyến đi trước và bức ảnh cho thấy cuộc gặp đã xảy ra; người nói chỉ quên ký ức ấy. Dùng forget + V-ing. To meet lại nói về việc quên thực hiện một cuộc gặp cần làm.",
        "Đáp án reading: Linh đang đọc tiểu thuyết rồi ngừng chính việc đọc để nghe điện thoại. Stop + V-ing diễn tả hành động bị dừng. Stopped to read sẽ nói cô dừng việc khác để đọc, ngược bối cảnh.",
        "Đáp án to have: nhóm tạm dừng thảo luận để ăn trưa. To have lunch là mục đích của việc dừng. Having lunch sẽ nói về ngừng ăn trưa, trong khi lúc đầu nhóm đang thảo luận.",
        "Đáp án là A memory of an action already performed. Remember posting và hình ảnh hòm thư cho thấy người nói nhớ việc đã gửi thư. Remember to post mới là nhớ thực hiện nhiệm vụ gửi; câu không nói về việc viết thư.",
        "Đáp án to feed: túi thức ăn chưa mở và con chó còn đói cho thấy nhiệm vụ cho ăn bị bỏ sót. Forget + to-V diễn tả quên làm. Feeding sẽ nói về ký ức của việc cho ăn đã xảy ra, không phù hợp bằng chứng.",
        "Câu đúng: I forgot to charge my phone. Sau I forgot dùng to charge để nói nhiệm vụ sạc điện thoại bị quên. To phải đứng trước charge nguyên mẫu; my phone là vật cần sạc. Charging sẽ nói về quên ký ức của việc đã sạc.",
        "Câu đúng: She will never forget winning the race. Will never forget diễn tả sẽ luôn giữ ký ức; winning the race là trải nghiệm chiến thắng đã có. Sau will dùng forget nguyên mẫu, còn sau forget ở nghĩa ký ức dùng winning.",
        "Câu đúng: Please do not forget to lock the door. Do not forget là lời nhắc đừng quên; to lock chỉ nhiệm vụ khóa cửa cần thực hiện. Sau do not dùng forget nguyên mẫu, không dùng forgets hay forgot; the door là tân ngữ của lock.",
        "Câu đúng: He had forgotten meeting our teacher. Had forgotten là quá khứ hoàn thành; meeting our teacher nói về cuộc gặp đã xảy ra nhưng ký ức bị quên. Meeting đứng sau forgotten vì đây là ký ức, không phải nhiệm vụ chưa làm.",
        "Câu đúng: They stopped to ask for directions. To ask nêu mục đích dừng lại để hỏi đường; ask for directions là cụm hỏi đường. Stopped asking sẽ là ngừng hỏi, khác với việc tạm dừng hành trình nhằm hỏi đường."
]
    }
  ];

  function prepareForExistingTXTParser(rawText) {
    return rawText.split(/\r?\n/).map(line => {
      const match = line.match(/^(\d+[.)]\s*)?\(\(\s*([\s\S]*?)\s*\)\)\s*$/);
      if (!match) return line;
      const divider = match[2].indexOf('::');
      const content = match[2].slice(0, divider).trim();
      const feedback = match[2].slice(divider + 2).trim();
      const questionEnd = content.indexOf('?');
      if (divider < 0 || questionEnd < 0 || !feedback) throw new Error('Invalid General Grammar multiple-choice question.');
      const prompt = content.slice(0, questionEnd + 1).trim();
      const options = content.slice(questionEnd + 1).split('|').map(value => value.trim());
      const correct = options.filter(value => /^\*\*[^*]+\*\*$/.test(value));
      if (correct.length !== 1 || options.length < 2) throw new Error('Each MCQ must mark exactly one correct option.');
      const others = options.filter(value => value !== correct[0]);
      return `${match[1] || ''}(( ${prompt} ${correct[0]} | ${others.join(' | ')} :: ${feedback} ))`;
    }).join('\n');
  }

  generalLessons.forEach(lesson => {
    Object.defineProperty(lesson, 'parts', {
      enumerable: false,
      get() {
        if (typeof root.parseTXT !== 'function') throw new Error('Load general-data.js after the GrammarSpace application script.');
        const parsed = root.parseTXT(prepareForExistingTXTParser(lesson.rawText));
        let index = 0;
        parsed.parts.forEach(part => part.exercises.forEach(exercise => {
          const feedback = lesson.exerciseFeedback[index++];
          if (typeof feedback !== 'string' || !feedback.trim()) throw new Error('Missing General Grammar question feedback.');
          // JSON feeds require a string, including for a normalized gap-fill question.
          exercise.feedback = feedback;
        }));
        if (index !== lesson.exerciseFeedback.length || index !== 40) throw new Error('Expected exactly 40 General Grammar questions.');
        return parsed.parts;
      }
    });
  });

  // The existing app exposes its own generalLessons array on window. Merge into it
  // instead of redeclaring that script's top-level const. Re-loading does not duplicate IDs.
  if (Array.isArray(root.generalLessons)) {
    generalLessons.forEach(lesson => {
      const index = root.generalLessons.findIndex(existing => existing.id === lesson.id);
      if (index < 0) root.generalLessons.push(lesson);
      else root.generalLessons[index] = lesson;
    });
  } else root.generalLessons = generalLessons;

  // Optional CommonJS export permits content checks without a browser or build tools.
  if (typeof module !== 'undefined' && module.exports) module.exports = generalLessons;
})(typeof globalThis !== 'undefined' ? globalThis : window);
