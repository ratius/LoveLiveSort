var MemberGroup = [
	["��'s",["Muse"]],
	["�����u���C�u!",["Muse","Muse2"]],
	["����'s�J�b�v�����O",["MuseCP"]],
	["Aqours",["Aqours"]],
	["�����u���C�u!�T���V���C��!!",["Aqours","Aqours2"]],
	["��Aqours�J�b�v�����O",["AqoursCP"]],
	["��'s��Aqorus",["Muse","Aqours"]],
	["������X�N�[���A�C�h�����D��",["Niji"]],
	["�X�N�t�F�XAll Stars",["Muse","Aqours","Niji"]],
	["���u���C�u!",["Seiran","Shino","Chitose","Touoh","Shion","YG"]],
	["�������Z",["Seiran"]],
	["�����_�w�@",["Shino"]],
	["����΋����Z",["Chitose"]],
	["�������w��",["Touoh"]],
	["���������w�@",["Shion"]],
	["��Y.G���ۊw��",["YG"]]
];
var CharList = [
	{name:"�����T��",     color:"#ffd6a5", group:{"Muse":1}},
	{name:"�����G��",       color:"#c4edfa", group:{"Muse":1}},
	{name:"�삱�Ƃ�",       color:"#e7dada", group:{"Muse":1}},
	{name:"���c�C��",       color:"#cddffc", group:{"Muse":1}},
	{name:"����z",         color:"#fffdb1", group:{"Muse":1}},
	{name:"���ؖ�^�P",     color:"#ffc3b7", group:{"Muse":1}},
	{name:"������",         color:"#e4d6f2", group:{"Muse":1}},
	{name:"����ԗz",       color:"#cbf5ce", group:{"Muse":1}},
	{name:"���V�ɂ�",       color:"#ffb9e9", group:{"Muse":1}},

	{name:"��T�ʂ̕�",     color:"#fff", group:{"Muse2":1}},
	{name:"��T�ʂ̕�",     color:"#fff", group:{"Muse2":1}},
	{name:"���Ƃ�̕�",     color:"#fff", group:{"Muse2":1}},
	{name:"�^�P�̕�",       color:"#fff", group:{"Muse2":1}},
	{name:"�ɂ��̕�",       color:"#fff", group:{"Muse2":1}},
	{name:"������",       color:"#fff", group:{"Muse2":1}},
	{name:"����������",     color:"#fff", group:{"Muse2":1}},
	{name:"���V������",     color:"#fff", group:{"Muse2":1}},
	{name:"���V������",     color:"#fff", group:{"Muse2":1}},
	{name:"���V�Ց��Y",     color:"#fff", group:{"Muse2":1}},
	{name:"�q�f�R",         color:"#fff", group:{"Muse2":1}},
	{name:"�t�~�R",         color:"#fff", group:{"Muse2":1}},
	{name:"�~�J",           color:"#fff", group:{"Muse2":1}},
	{name:"�Y���c�o�T",     color:"#fff", group:{"Muse2":1}},
	{name:"�D�؂��񂶂�",   color:"#fff", group:{"Muse2":1}},
	{name:"�����p���",     color:"#fff", group:{"Muse2":1}},
	{name:"�A���p�J",       color:"#fff", group:{"Muse2":1}},
	{name:"�����V���K�[",   color:"#fff", group:{"Muse2":1}},
	
	{name:"�ق̂���",       color:"#ffd6a5", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"���Ƃق�",       color:"#e7dada", color2:"#ffd6a5", group:{"MuseCP":1}},
	{name:"�ق̂���",       color:"#ffd6a5", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"�ق̂��",       color:"#ffd6a5", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"�ق̂܂�",       color:"#ffd6a5", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"�ق̂̂�",       color:"#ffd6a5", color2:"#e4d6f2", group:{"MuseCP":1}},
	{name:"�ق̂ς�",       color:"#ffd6a5", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"�ق̂ɂ�",       color:"#ffd6a5", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"���Ƃ���",       color:"#e7dada", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"���肤��",       color:"#c4edfa", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"������",       color:"#c4edfa", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"����܂�",       color:"#c4edfa", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"�̂�����",       color:"#e4d6f2", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"����ς�",       color:"#c4edfa", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"�ɂ�����",       color:"#ffb9e9", color2:"#c4edfa", group:{"MuseCP":1}},
	{name:"���Ƃ���",       color:"#e7dada", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"���Ƃ��",       color:"#e7dada", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"���Ƃ܂�",       color:"#e7dada", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"���Ƃ̂�",       color:"#e7dada", color2:"#e4d6f2", group:{"MuseCP":1}},
	{name:"���Ƃς�",       color:"#e7dada", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"���Ƃɂ�",       color:"#e7dada", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"���݂��",       color:"#cddffc", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"���݂܂�",       color:"#cddffc", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"�̂�����",       color:"#e4d6f2", color2:"#cddffc", group:{"MuseCP":1}},
	{name:"���݂ς�",       color:"#cddffc", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"���݂ɂ�",       color:"#cddffc", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"���܂�",       color:"#fffdb1", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"�̂����",       color:"#e4d6f2", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"���ς�",       color:"#fffdb1", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"�ɂ����",       color:"#ffb9e9", color2:"#fffdb1", group:{"MuseCP":1}},
	{name:"�̂��܂�",       color:"#e4d6f2", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"�܂��ς�",       color:"#ffc3b7", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"�ɂ��܂�",       color:"#ffb9e9", color2:"#ffc3b7", group:{"MuseCP":1}},
	{name:"�̂��ς�",       color:"#e4d6f2", color2:"#cbf5ce", group:{"MuseCP":1}},
	{name:"�̂��ɂ�",       color:"#e4d6f2", color2:"#ffb9e9", group:{"MuseCP":1}},
	{name:"�ɂ��ς�",       color:"#ffb9e9", color2:"#cbf5ce", group:{"MuseCP":1}},

	{name:"���C���",       color:"#ffcdb7", group:{"Aqours":1}},
	{name:"�������q",       color:"#ffc8d2", group:{"Aqours":1}},
	{name:"���Y�ʓ�",       color:"#b6eae7", group:{"Aqours":1}},
	{name:"���V�_�C��",     color:"#fdc2c7", group:{"Aqours":1}},
	{name:"�n�ӗj",         color:"#c4e5fe", group:{"Aqours":1}},
	{name:"�Ó��P�q",       color:"#d9e9f0", group:{"Aqours":1}},
	{name:"���ؓc�Ԋ�",     color:"#f5eb9c", group:{"Aqours":1}},
	{name:"�����f�",       color:"#ecd1f3", group:{"Aqours":1}},
	{name:"���V���r�B",     color:"#fbceeb", group:{"Aqours":1}},

	{name:"��̂̕�",       color:"#fff", group:{"Aqours2":1}},
	{name:"���q�̕�",       color:"#fff", group:{"Aqours2":1}},
	{name:"�P�q�̕�",       color:"#fff", group:{"Aqours2":1}},
	{name:"���C���n",       color:"#fff", group:{"Aqours2":1}},
	{name:"���C�u��",       color:"#fff", group:{"Aqours2":1}},
	{name:"�悵��",         color:"#fff", group:{"Aqours2":1}},
	{name:"����",         color:"#fff", group:{"Aqours2":1}},
	{name:"�ނ�",           color:"#fff", group:{"Aqours2":1}},
	{name:"��������",       color:"#fff", group:{"Aqours2":1}},
	{name:"�킽����",       color:"#fff", group:{"Aqours2":1}},
	{name:"����",         color:"#fff", group:{"Aqours2":1}},
	{name:"���p����",       color:"#fff", group:{"Aqours2":1}},
	{name:"���p����",       color:"#fff", group:{"Aqours2":1}},

	{name:"�����肱",       color:"#ffcdb7", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"�����Ȃ�",       color:"#ffcdb7", color2:"#b6eae7", group:{"AqoursCP":1}},
	{name:"�����_�C",       color:"#ffcdb7", color2:"#fdc2c7", group:{"AqoursCP":1}},
	{name:"�悤����",       color:"#c4e5fe", color2:"#ffcdb7", group:{"AqoursCP":1}},
	{name:"�����悵",       color:"#ffcdb7", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"�����܂�",       color:"#ffcdb7", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"�����܂�",       color:"#ffcdb7", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"�������r",       color:"#ffcdb7", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"���Ȃ肱",       color:"#b6eae7", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"�_�C�肱",       color:"#fdc2c7", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"�悤�肱",       color:"#c4e5fe", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"�悵�肱",       color:"#d9e9f0", color2:"#ffc8d2", group:{"AqoursCP":1}},
	{name:"�肱�܂�",       color:"#ffc8d2", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"�肱�܂�",       color:"#ffc8d2", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"�肱���r",       color:"#ffc8d2", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"���ȃ_�C",       color:"#b6eae7", color2:"#fdc2c7", group:{"AqoursCP":1}},
	{name:"�悤����",       color:"#c4e5fe", color2:"#b6eae7", group:{"AqoursCP":1}},
	{name:"���Ȃ悵",       color:"#b6eae7", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"���Ȃ܂�",       color:"#b6eae7", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"���Ȃ܂�",       color:"#b6eae7", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"���ȃ��r",       color:"#b6eae7", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"�悤�_�C",       color:"#c4e5fe", color2:"#fdc2c7", group:{"AqoursCP":1}},
	{name:"�_�C�悵",       color:"#fdc2c7", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"�_�C�܂�",       color:"#fdc2c7", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"�_�C�}��",       color:"#fdc2c7", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"�_�C���r",       color:"#fdc2c7", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"�悤�悵",       color:"#c4e5fe", color2:"#d9e9f0", group:{"AqoursCP":1}},
	{name:"�悤�܂�",       color:"#c4e5fe", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"�悤�܂�",       color:"#c4e5fe", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"�悤���r",       color:"#c4e5fe", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"�悵�܂�",       color:"#d9e9f0", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"�悵�܂�",       color:"#d9e9f0", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"�悵���r",       color:"#d9e9f0", color2:"#fbceeb", group:{"AqoursCP":1}},
	{name:"�܂�܂�",       color:"#f5eb9c", color2:"#ecd1f3", group:{"AqoursCP":1}},
	{name:"���r�܂�",       color:"#fbceeb", color2:"#f5eb9c", group:{"AqoursCP":1}},
	{name:"���r�܂�",       color:"#fbceeb", color2:"#ecd1f3", group:{"AqoursCP":1}},

	{name:"�㌴����",       color:"#edc5ce", group:{"Niji":1}},
	{name:"���{������",     color:"#e8e089", group:{"Niji":1}},
	{name:"���₵����",     color:"#bee0ed", group:{"Niji":1}},
	{name:"�����ʗ�",       color:"#c0cafa", group:{"Niji":1}},
	{name:"�{����",         color:"#fdb792", group:{"Niji":1}},
	{name:"�ߍ]�ޕ�",       color:"#d3b8e5", group:{"Niji":1}},
	{name:"�D�؂���",     color:"#f9a6aa", group:{"Niji":1}},
	{name:"�G�}�E���F���f", color:"#c8edbe", group:{"Niji":1}},
	{name:"�V��������",     color:"#cfd0e3", group:{"Niji":1}},
	
	{name:"���₵����",    color:"#acf", group:{"Seiran":1}},
	{name:"��V���}���J",  color:"#acf", group:{"Seiran":1}},
	{name:"�i�R�݂Ȃ�",    color:"#acf", group:{"Seiran":1}},
	{name:"���舟��",      color:"#acf", group:{"Seiran":1}},
	{name:"��������",      color:"#acf", group:{"Seiran":1}},
	{name:"��𐹗�",      color:"#acf", group:{"Seiran":1}},
	{name:"�c�������q",    color:"#acf", group:{"Seiran":1}},
	{name:"�{������",    color:"#acf", group:{"Seiran":1}},
	{name:"����I�|",      color:"#acf", group:{"Seiran":1}},
	{name:"�{���R�R",      color:"#fbb", group:{"Shino":1}},
	{name:"����э�",      color:"#fbb", group:{"Shino":1}},
	{name:"�N���X�e�B�[�i",color:"#fbb", group:{"Shino":1}},
	{name:"�䓰�D��",      color:"#fbb", group:{"Shino":1}},
	{name:"�_�J����",      color:"#fbb", group:{"Shino":1}},
	{name:"�ߍ]�ޕ�",      color:"#fbb", group:{"Shino":1}},
	{name:"�ߍ]�y",        color:"#fbb", group:{"Shino":1}},
	{name:"�x�q������",    color:"#fbb", group:{"Shino":1}},
	{name:"�g�쐐��",      color:"#fbb", group:{"Shino":1}},
	{name:"����V�F",      color:"#bda", group:{"Chitose":1}},
	{name:"�������G",      color:"#bda", group:{"Chitose":1}},
	{name:"�e�r���",      color:"#bda", group:{"Chitose":1}},
	{name:"�{�c���邩",    color:"#bda", group:{"Chitose":1}},
	{name:"�����퉹",      color:"#bda", group:{"Chitose":1}},
	{name:"�X���ȂȂ�",    color:"#bda", group:{"Chitose":1}},
	{name:"������",        color:"#bda", group:{"Chitose":1}},
	{name:"���X�ǂ邤",    color:"#bda", group:{"Chitose":1}},
	{name:"���ؓ�",        color:"#bda", group:{"Chitose":1}},
	{name:"���蔹",        color:"#eda", group:{"Touoh":1}},
	{name:"��c��",        color:"#eda", group:{"Touoh":1}},
	{name:"�݊y�ӂ�",      color:"#eda", group:{"Touoh":1}},
	{name:"�ˌ��D��",      color:"#eda", group:{"Touoh":1}},
	{name:"�Ėؕ�",        color:"#eda", group:{"Touoh":1}},
	{name:"��������",      color:"#eda", group:{"Touoh":1}},
	{name:"�����H�P�T",    color:"#eda", group:{"Touoh":1}},
	{name:"��������",      color:"#eda", group:{"Touoh":1}},
	{name:"�����",        color:"#eda", group:{"Touoh":1}},
	{name:"�⊪��ߎq",    color:"#cae", group:{"Shion":1}},
	{name:"�u��m��",      color:"#cae", group:{"Shion":1}},
	{name:"������",        color:"#cae", group:{"Shion":1}},
	{name:"�S��A�L��",    color:"#cae", group:{"Shion":1}},
	{name:"��������",      color:"#cae", group:{"Shion":1}},
	{name:"���������",    color:"#cae", group:{"Shion":1}},
	{name:"���H���",      color:"#cae", group:{"Shion":1}},
	{name:"���H���",      color:"#cae", group:{"Shion":1}},
	{name:"���V���r��",    color:"#cae", group:{"Shion":1}},
	{name:"����",          color:"#dfb", group:{"YG":1}},
	{name:"���N�V���[�^",  color:"#dfb", group:{"YG":1}},
	{name:"���x�b�J",      color:"#dfb", group:{"YG":1}},
	{name:"�C�U�x��",      color:"#dfb", group:{"YG":1}},
	{name:"�G�}�E���F���f",color:"#dfb", group:{"YG":1}},
	{name:"�W�F�j�t�@�[",  color:"#dfb", group:{"YG":1}},
	{name:"�}���A",        color:"#dfb", group:{"YG":1}},
	{name:"���I",          color:"#dfb", group:{"YG":1}},
	{name:"��������",      color:"#dfa", group:{"YG":1}}
];

//�����X�g��ϊ�����
var Member = [];
for(j=0; j<MemberGroup.length; j++){
	Member[j] = [];
}

for(i=0; i<CharList.length; i++){
	obj = CharList[i];
	for(j=0; j<MemberGroup.length; j++){
		for(k=0; k<MemberGroup[j][1].length; k++){
			if(MemberGroup[j][1][k] in obj.group){
				Member[j].push(i);
				break;
			}
		}
	}
}
//�V���b�t�������Ă���
for(i=0; i<MemberGroup.length; i++){
	shuffle(Member[i]);
}

//*********************************************************

var lstMember = new Array();
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1,cmp2;
var head1,head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;
var finishFlag;
var SortingGroup;

//�ϐ��̏�����+++++++++++++++++++++++++++++++++++++++++++++
function initList(){
	if(document.starter.CharacterSelect.selectedIndex == 0){ return;} //�u�I�����Ă��������v�̏ꍇ�͖���
	
	SortingGroup = document.starter.CharacterSelect.selectedIndex-1;
	var n = 0;
	var mid;
	var i;
	
	lstMember = new Array();
	parent = new Array();
	equal = new Array();
	rec = new Array();
	cmp1,cmp2;
	head1,head2;
	nrec;

	numQuestion;
	totalSize;
	finishSize;
	finishFlag;

	//�\�[�g���ׂ��z��
	lstMember[n] = new Array();
	for (i=0; i<Member[SortingGroup].length; i++) {
		lstMember[n][i] = i;
	}
	
	parent[n] = -1;
	totalSize = 0;
	n++;

	for (i=0; i<lstMember.length; i++) {
		//�v�f�����Q�ȏ�Ȃ�Q�������A
		//�������ꂽ�z���lstMember�̍Ō�ɉ�����
		if(lstMember[i].length>=2) {
			mid = Math.ceil(lstMember[i].length/2);
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(0,mid);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(mid,lstMember[i].length);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
		}
	}

	//�ۑ��p�z��
	for (i=0; i<Member[SortingGroup].length; i++) {
		rec[i] = 0;
	}
	nrec = 0;

	//���������̌��ʂ�ۑ����郊�X�g
	//�L�[�F�����N�n�_�̒l
	// �l �F�����N�I�_�̒l
	for (i=0; i<=Member[SortingGroup].length; i++) {
		equal[i] = -1;
	}

	cmp1 = lstMember.length-2;
	cmp2 = lstMember.length-1;
	head1 = 0;
	head2 = 0;
	numQuestion = 1;
	finishSize = 0;
	finishFlag = 0;

	showImage();
}

//���X�g�̃\�[�g+++++++++++++++++++++++++++++++++++++++++++
//flag�F��r����
//  -1�F����I��
//   0�F��������
//   1�F�E��I��
function sortList(flag){
	var i;
	var str;

	//rec�ɕۑ�
	if (flag<0) {
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (flag>0) {
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}
	else {
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
		equal[rec[nrec-1]] = lstMember[cmp2][head2];
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//�Е��̃��X�g�𑖍����I������̏���
	if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		//���X�gcmp2�������� - ���X�gcmp1�̎c����R�s�[
		while (head1<lstMember[cmp1].length){
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
		//���X�gcmp1�������� - ���X�gcmp2�̎c����R�s�[
		while (head2<lstMember[cmp2].length){
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//�����̃��X�g�̍Ō�ɓ��B�����ꍇ��
	//�e���X�g���X�V����
	if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) {
			lstMember[parent[cmp1]][i] = rec[i];
		}
		lstMember.pop();
		lstMember.pop();
		cmp1 = cmp1-2;
		cmp2 = cmp2-2;
		head1 = 0;
		head2 = 0;

		//�V������r���s���O��rec��������
		if (head1==0 && head2==0) {
			for (i=0; i<Member.length; i++) {
				rec[i] = 0;
			}
			nrec = 0;
		}
	}

	if (cmp1<0) {
		str = "Battle No."+(numQuestion-1)+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
		document.getElementById("battleNumber").innerHTML = str;

		showResult();
		finishFlag = 1;
	}
	else {
		showImage();
	}
}

//���ʂ̕\��+++++++++++++++++++++++++++++++++++++++++++++++
function showResult() {
	var ranking = 1;
	var sameRank = 1;
	var str = "";
	var num = 0;
	var i;
	//�w�b�_�[
	str += '<table class="resultTable" align="center"><tr>'
	+ '<td class="result"; style="text-align:center;">����</td>'
	+ '<td class="result"; style="text-align:center;">���O</td></tr>';

	for (i=0; i<Member[SortingGroup].length; i++) {
		num = Member[SortingGroup][lstMember[0][i]];
		str += 
		'<tr><td class="result"; style="background-color:' + CharList[num].color
		+ '; text-align:right; padding-right:5px;">' +ranking+ '</td>'
		+ '<td class="result"; style="background-color:'
		+ ('color2' in CharList[num] ? CharList[num].color2 : CharList[num].color)
		+ '; padding-left:5px;">' + CharList[num].name + '</td></tr>';

		if (i<Member[SortingGroup].length-1) {
			if (equal[lstMember[0][i]]==lstMember[0][i+1]) {
				sameRank++;
			} else {
				ranking += sameRank;
				sameRank = 1;
			}
		}
	}
	str += "<\/table>";

	document.getElementById("resultField").innerHTML = str;
}

//��r����Q�v�f�̕\��+++++++++++++++++++++++++++++++++++
function showImage() {
	var str0 = "Battle No."+numQuestion+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
	var str1 = Member[SortingGroup][lstMember[cmp1][head1]];
	var str2 = Member[SortingGroup][lstMember[cmp2][head2]];
	
	document.getElementById("battleNumber").innerHTML = str0;
	document.getElementById("leftField2").innerHTML = CharList[str1].name;
	document.getElementById("rightField2").innerHTML = CharList[str2].name;
	
	document.getElementById("leftField").style.backgroundColor = CharList[str1].color;
	document.getElementById("rightField").style.backgroundColor= CharList[str2].color;

	document.getElementById("leftColor").style.backgroundColor =
	 ('color2' in CharList[str1] ? CharList[str1].color2 : CharList[str1].color);
	document.getElementById("rightColor").style.backgroundColor =
	 ('color2' in CharList[str2] ? CharList[str2].color2 : CharList[str2].color);

	
	numQuestion++;
}

//���ڂ��V���b�t��
function shuffle(array) {
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}