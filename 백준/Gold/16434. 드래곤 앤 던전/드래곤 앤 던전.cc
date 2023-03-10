#include<bits/stdc++.h>
using namespace std;
#define co(a) cout << a << "\n";
typedef long long ll;      
ll n, attack, t[140005], a[140005], h[140005];
void fastIO(){
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
}   
bool check(ll mid){
	ll init_hp = mid;
	ll init_attack = attack;  
	for(int i = 0; i < n; i++){
		if(t[i] == 2){
			mid = min(init_hp, mid + h[i]);
			init_attack += a[i];
		}else{
			ll div = h[i] / init_attack + (h[i] % init_attack ? 1 : 0);
			ll attack_Cnt = div - 1; 
		//	cout << "ATTACK : " << attack_Cnt * a[i] << "\n";
			mid -= attack_Cnt * a[i];
		}  
		//cout << mid << " ";
		if(mid <= 0) return false;
	}
	return true; 
}
int main(){ 
	fastIO();
	cin >> n >> attack; 
	ll init_lo = 1; 
	for(int i = 0; i < n; i++){
		cin >> t[i] >> a[i] >> h[i]; 
	}  
	ll lo = 1, hi = 1e18 + 4, ret; 
	while(lo <= hi){
		ll mid = (lo + hi) / 2; 
		if(check(mid)){
			hi = mid - 1; 
			ret = mid;
		}else lo = mid + 1; 
	}
	co(ret) 
	return 0;
}